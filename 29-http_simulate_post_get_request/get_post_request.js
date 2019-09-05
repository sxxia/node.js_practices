const http = require('http');

// 方式一
// http.get('http://google.com', res => {
//   res.on('data', trunk => {
//     console.log(trunk.toString('utf8'));
//   });
// });

// 方式二
let request = http.request({
  protocol: 'http:', // 请求的协议
  host: 'google.com',  // 请求的host
  port: 80, // 端口（浏览器）
  method: 'GET', // GET请求的第二种表达方式，如果要发送POST请求，这里就是POST
  timeout: 2000, // 超时时间
  path: '/' // 请求路径
}, res => {
  res.on('data', trunk => {
    console.log(trunk.toString('utf8'));
  });
});

request.end();