const fs = require('fs');

// 读取同目录下的index.html文件， 设置了编码为 utf8
// readfileSync是同步方法，当node执行到此行代码是，整个程序等待文件读完后，在往下执行
let fileContent = fs.readFileSync('./index.html', {
  encoding: 'utf8'
});

console.log(fileContent);