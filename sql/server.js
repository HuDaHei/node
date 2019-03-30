const mysql = require('mysql');
let sqlConfig = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'learndb'
};
// 连接数据库
const connection = mysql.createConnection(sqlConfig)
// 连接数据库
module.exports = {
  connection
}