// // app.js
// const mysql = require("mysql");

// // First you need to create a connection to the db
// const con = mysql.createConnection({
//   host: "localhost",
//   user: "apicusense",
//   password: "cuapi123",
//   database: "apicusense"
// });

// con.connect(err => {
//   if (err) {
//     console.log("Error connecting to Db");
//     return;
//   }
//   console.log("Connection established");
// });

// con.query("SELECT * FROM station", (err, rows) => {
//   if (err) throw err;

//   console.log("Data received from Db:\n");
//   console.log(rows);
// });

// con.end(err => {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });

// get the client
const mysql = require("mysql2");

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: "localhost",
  user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.query("SELECT * FROM station", function(err, rows, fields) {
  // Connection is automatically released when query resolves
  let match = {};
  for (i = 0; i < rows.length; i++) {
    if (rows[i].stationid == "DustBoy/DB68") {
      console.log(rows[i]);
      match = rows[i];
      console.log(match);
    }
  }
});
