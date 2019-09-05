// 引入expres模块
const express = require('express');
const path = require('path');

// express跟connect是完全兼容的
// 创建一个app
let app = express();

// 这个是注册静态的中间件，也就是文件在本地。
app.use(express.static(path.join(__dirname, 'index.html')));

// 创建中间件
app.get('/home', (req, res, next) => {
  res.send('home page');
  next();
});

app.get('/client', (req, res) => {
  res.send('Client page');
  res.end();
});

// listen 3000端口
app.listen(3000, () => {
  console.log('listen on port 3000, http://localhost:3000');
});