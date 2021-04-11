var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE Post (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            country text, 
            date date, 
            link text
            )`,
        (err) => {
            if (err) {
                    console.log(err.message);
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO Post (country, date, link) VALUES (?,?,?)'
                db.run(insert, ["de",new Date(), "Link"])
                db.run(insert, ["de",new Date(), "Link2"])

            }
        });  
    }
});


module.exports = db
