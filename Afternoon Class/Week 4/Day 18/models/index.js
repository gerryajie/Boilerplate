const mysql = require('mysql2'); // Import mysql2 package
const { promisify } = require('util');

// Make connection to mysql
const connection = mysql.createConnection({
  host: 'gabatch15.coynohz9l3ig.ap-southeast-1.rds.amazonaws.com',
  user: 'root',
  password: 'Aneh1234',
  database: 'salesReza',
});

exports.query = promisify(connection.query).bind(connection);
