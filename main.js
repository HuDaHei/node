const http = require('http');
const url = require('url');
const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');


const hostname = 'localhost';
const port = 3000;
// 创建服务器
const server = http.createServer ( function(request, response){
    // 读取test文件
    fs.readFileSync('./webstatic/test.html', (err, data)=>{
        if(err) {
            response.statusCode = 400;
            response.end('not Found')
        } else {
             
        }
    })
});
server.listen( port, hostname, ()=> {
    console.log(`server run at http://${hostname}:${port}`);
    childProcess.exec(`start http://${hostname}:${port}`);
});