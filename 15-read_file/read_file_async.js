const fs = require('fs');

// 异步读取文件主线程继续执行后续的代码，线程池的线程读取文件内容，
// 文件内容读取成功后，调用回调函数
// 这种方法只适合小文件的读取
fs.readFile('./index.html', {encoding: 'utf8'}, (err, data) => {
  console.log('Completed file reading, execute call back function');
  if (err) {
    console.log('There is a error: ', err);
    // 直接跳出callback fuction
    // 如果不写return，下面的console.log还会被继续执行
    return;
  }

  console.log(data);
});

console.log('The main thread continuing ....');
