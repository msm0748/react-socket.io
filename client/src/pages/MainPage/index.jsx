import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <ul>
      <li>
        <Link to="/connection" className="text-xl text-red-400">
          소켓 연결
        </Link>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}
