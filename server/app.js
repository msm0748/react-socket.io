const { createServer } = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  console.log('connection', socket.id);

  socket.on('login', (userName, cb) => {
    console.log(userName); // 클라에서 보낸 userName 정보가 출력
    cb('클라로 보낼 정보'); // 클라로 보낼 정보를 cb함수에 담음
  });

  socket.on('disconnect', () => {
    console.log('연결 끊김');
  });
});

httpServer.listen(8000, () => {
  console.log('server running at http://localhost:8000');
});
