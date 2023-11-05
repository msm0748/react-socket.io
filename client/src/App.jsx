import { Route, Routes } from 'react-router-dom';
import ConnectionPage from './pages/ConnectionPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/connection" element={<ConnectionPage />} />
    </Routes>
  );
}

export default App;
