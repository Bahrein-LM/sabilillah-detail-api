import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-900 text-white p-4">
      <ul className="flex space-x-10 justify-center">
        <li>
            <NavLink to="/" end>
                Data Siswa
            </NavLink>
        </li>
        <li>
            <NavLink to="/kelas">
                Data Kelas
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard">
                Dashboard
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}
