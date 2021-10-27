const mysql = require('mysql2'); // Import mysql2 package
const { promisify } = require('util');

// Make connection to mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'sales',
});

exports.query = promisify(connection.query).bind(connection);
