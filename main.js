const http = require('http');
const childProcess = require('child_process');
const fs = require('fs');
const conn = require('./sql/server.js').connection;
console.log(conn,"conn");
const hostname = 'localhost';
const port = 3000;
// 创建服务器
const server = http.createServer(function (request, response) {
	// 封装好的返回对象
	let backData = {
		code: '200',
		data: {},
		page: '1',
		total: 400,
	}
	// 重定向 如果地址是 / 或者 /test.html 定向到文件的位置
	let url = request.url;
  if(url === '/' || url === '/test.html') {
		fs.readFile('./webstatic/test.html', (err,data) => {
			let end = '';
			if(err) {
				response.statusCode = 400;
				end = 'NOT FOUND';
			} else {
				response.write(data);
			}
			response.end(end);
		})
	}
	// 登陆
	if(url === '/login') {
		request.on('data', (buffer)=>{
      console.log(buffer)
		});
		request.on('end',()=>{
			let sql = 'select * from userInfo';
			conn.query(sql,(error,result,fields)=>{
				// if(error) throw error;
				console.log(result[0],'result');
				response.statusCode = 200;
				response.write(JSON.stringify(result[0]));
				response.end();
			})
		})
	}
});
server.listen(port, hostname, () => {
	console.log(`server run at http://${hostname}:${port}`);
	childProcess.exec(`start http://${hostname}:${port}`);
});