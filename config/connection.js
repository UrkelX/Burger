const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "brooklyn",
    database: "burger_db"
});

connection.connect();

module.exports = connection;