const fs = require('fs');
const path = require('path');

// __dirname返回当前文件路径（不包括自己的文件名）
// 我们用join的方法，create一个index.txt文件的路径
let filePath = path.join(__dirname, 'index.txt');

// 异步写入
fs.writeFile(filePath, 'Hello, this is a text', (err) => {
  if(err) {
    console.log('Error happen: ', err);
    return;
  }
  
  console.log('Written file successful');
});