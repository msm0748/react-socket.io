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
  socket.on('join', (roomId) => {
    socket.join(roomId);

    const roomInfo = io.sockets.adapter.rooms.get(roomId);
    console.log(roomInfo, 'roomId'); // 방에 속한 클라이언트 id정보가 출력
  });

  socket.on('disconnect', () => {
    console.log('연결 끊김'); // 클라에서 소켓 연결 해제시 발생
  });
});

httpServer.listen(8000, () => {
  console.log('server running at http://localhost:8000');
});
