const net = require('net');

// 创建服务器对象
let server = net.createServer();

server.on('connection', client => {
  // client就是指向客户端的一个对象。可以通过它给客户端发送数据
  // client是一个可写流，也是一个可读流，所以可以进行数据读取
  client.on('data', chunk => {
    console.log(chunk.toString('utf8'))
  });

  // 向客户端写入数据
  client.write('This message was sent from server! \n');
  client.end('Close connection');
});

// 开始监听58888端口
server.listen(58888);