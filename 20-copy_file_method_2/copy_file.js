const fs = require('fs');
const path = require('path');

let srcFile = path.join(__dirname, 'images.jpeg');
let distFile = path.join(__dirname, 'images_copy.jpeg');

let rs = fs.createReadStream(srcFile);
let ws = fs.createWriteStream(distFile);

// 直接建立了一个pipe，一边是读取文件，另一边是写入文件
rs.pipe(ws);