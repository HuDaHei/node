const http = require('http');
const url = require('url');

// 创建服务器
http.createServer ( function(request, response) {
    console.log(request, response);
    
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/')