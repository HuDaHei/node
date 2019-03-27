const http = require('http');
const url = require('url');
const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
// const conn = require('./sql/server.js');

const hostname = 'localhost';
const port = 3000;

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   insecureAuth: true,
//   database: 'lerandb'
// });
// // 连接数据库
// connection.connect();
// 创建服务器
const server = http.createServer ( function(request, response){
    let url = request.url;
    if(url === '/text.html'){
        fs.readFile(`./webstatic${request.url}`, (err, data)=>{
            if(err) {
                response.statusCode = 400;
                response.write('Not Found');
            } else {
                response.write(data)
            }
        });
    }
    if(url === '/login'){
        response.write('lll');
    }
    // 关闭
    response.end();
});
server.listen( port, hostname, ()=> {
    console.log(`server run at http://${hostname}:${port}/test.html`);
    childProcess.exec(`start http://${hostname}:${port}/test.html`);
});