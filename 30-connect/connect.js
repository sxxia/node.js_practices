const connect = require('connect');

// connect是一个函数，返回一个中间件的控制器
let app = connect();

// 注册中间件
app.use((req, res, next) => {
  console.log('1');
  // 执行完第一个，用next（）执行下一个中间件
  next();
});

app.use((req, res, next) => {
  console.log('2');
  next();
});

app.use((req, res) => {
  res.write('Hello world');
  console.log('3');
  // 最后一个中间件，end
  res.end();
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});