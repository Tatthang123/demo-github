//test connection
require('dotenv').config();
//khái báo thêm promise để viết dưới dạng async await
const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port : process.env.DB_PORT,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections : true,
    connectionLimit : 20,
    queueLimit : 0,
  });
  module.exports = connection;

  