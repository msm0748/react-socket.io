import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';

export default function RoomPage() {
  const [socket, setSocket] = useState();
  const { roomId } = useParams();

  useEffect(() => {
    const newSocket = io('http://localhost:8000');
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on('connect', () => {
      console.log('연결 완료');
    });
    socket.emit('join', roomId);

    socket.on('disconnect', () => {
      console.log('연결 끊김');
    });
  }, [socket, roomId]);

  return <div>RoomPage</div>;
}
