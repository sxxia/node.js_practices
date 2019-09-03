const fs = require('fs');

// 创建一个可读取的文件流
let stream = fs.createReadStream('./images.jpeg', {
  encoding: 'utf8'
});

// 当流的管道建立后，并打开的时候，触发open事件
// 打开管道
stream.on('open', (fd) => {
  console.log('The pipe is created and open fd: ', fd);
});

// 当数据流过来时，直接触发data事件
// 传递数据
stream.on('data', (trunk) => {
  console.log('data', trunk);
});

// 数据流结束时，结束流
stream.on('end', () => {
  console.log('Reading file compoleted!');
});