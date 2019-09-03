const fs = require('fs');
const path = require('path');

let srcFile = path.join(__dirname, 'images.jpeg');
let distFile = path.join(__dirname, 'images_copy.jpeg');

let rs = fs.createReadStream(srcFile);
let ws = fs.createWriteStream(distFile);

rs.on('open', (fd) => {
  console.log('Start reading file.');
});

rs.on('close', () => {
  console.log('Completed reading file');
});

// 读数据时，同时也在写入数据
rs.on('data', (trunk) => {
  // ws.write()是写入数据的意思，当不能写入的时候，会返回一个false
  if(ws.write(trunk) === false) {
    // 缓冲区满了，不能写入
    // 让可读流，暂停读取数据
    rs.pause();
  }
});

// 当写入流drain（干）的时候， resume读取流
ws.on('drain', () => {
  // 可写流数据可以继续写入的时候，让可读流继续读取数据
  rs.resume();
});