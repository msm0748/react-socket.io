import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');

  const handleChangeRoomId = (e) => {
    setRoomId(e.target.value);
  };

  return (
    <div className="m-5">
      <div className="flex gap-4">
        <input className="border" type="text" value={roomId} onChange={handleChangeRoomId} />
        <button className="border bg-cyan-400" type="button" onClick={() => navigate(`/room/${roomId}`)}>
          입장
        </button>
      </div>
    </div>
  );
}
