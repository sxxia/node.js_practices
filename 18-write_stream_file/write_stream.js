const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'index.txt');

let stream = fs.createWriteStream(filePath, {
  // 如果不加flag，第一个写入的字符，将要被第二次写入的覆盖
  // 如果加上flag，写入的不会被覆盖。a意思是apend
  flag: 'a'
});

// 打开可写流
stream.on('open', (fd) => {
  console.log('writte stream open: ', fd);
});

// 关闭可写流
stream.on('close', () => {
  console.log('writte strean close');
});

// 往可写流里，写入数据
for(let i = 1; i < 100; i++) {
  stream.write('Hello node.js! \r\n');
}

// end是当写入完成，在最后一行加入你想显示的字符
stream.end('complete');