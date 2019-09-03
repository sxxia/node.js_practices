const fs = require('fs');

// __dirname gives you the path of the currently running file
// let watcher = fs.watch(__dirname);

// on 用于监听事件
// watcher.on('change', (eventType, fileName) => {
//   console.log('change: ', eventType, fileName);
// });

// 写法二
let watcher = fs.watch(__dirname, (eventType, fileName) => {
  console.log('callback: ', eventType, fileName);
});

// 10s 后关闭监听
setTimeout(() => {
  watcher.close();
}, 10000);