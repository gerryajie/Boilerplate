require('dotenv').config()
module.exports =
{
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "day20",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "52.250.11.4",
    "dialect": "mysql"
  },
  "production": {
    "username": "fadhlan",
    "password": "1a2b3c45",
    "database": "database_production",
    "host": "52.250.11.3",
    "dialect": "postgres"
  }
}
