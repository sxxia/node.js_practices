const http = require('http');

// http模块创建web server的简单写法
http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.url);
  console.log(req.method);

  res.write('This message was sent from server!');
  res.end();
}).listen(3000, () => {
  console.log('Server listens on port 3000, please click http://localhost:3000');
});