//Set up MySQL connection.

var mysql = require("mysql");


var connection = mysql.createConnection({
    port: 3306,
    hose: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
})

//Make a connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;