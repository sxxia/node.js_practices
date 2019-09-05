const net = require('net');

// 连接服务器
let client = net.connect(58888, '127.0.0.1', () => {
  console.log('Connected with server');
});

// 接收服务器传过来的数据
client.on('data', chunk => {
  console.log(chunk.toString('utf8'));
});

// 向服务器写入数据
client.write('This message was sent from client!');

client.end();