import { Route, Routes } from 'react-router-dom';
import RoomPage from './pages/RoomPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
