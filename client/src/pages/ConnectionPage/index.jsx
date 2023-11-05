import { useEffect } from 'react';
import useSocket from '../../hooks/useSocket';

export default function ConnectionPage() {
  const socket = useSocket();

  useEffect(() => {
    socket?.emit('login', '안뇽', (cb) => {
      console.log('res', cb); // 서버에서 매개변수로 보낸 정보가 출력
    });
  }, [socket]);

  return <div>ConnectionPage</div>;
}
