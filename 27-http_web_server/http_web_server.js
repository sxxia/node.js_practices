// 用http模块创建一个web server
const http = require('http');

// 创建一个http的服务器对象
let server = http.createServer();

// 监听客服端（浏览器）的请求数据和发送响应报文
server.on('request', (req, res) => {
  // req 请求报文的封装
  console.log(req.headers);
  console.log(req.url);
  console.log(req.methods);

  // res 响应报文的封装
  res.write('This message is from http web server!');
  res.end();
});

// 让服务器对象监听3000端口
server.listen(3000, () => {
  console.log('Server listen on port 3000, click: http://localhost:3000');
});