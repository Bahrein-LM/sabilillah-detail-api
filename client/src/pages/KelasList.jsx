import { useEffect, useState } from 'react';
import api from '../api/axiosClient';

export default function KelasList() {
  const [kelas, setKelas] = useState([]);
  useEffect(() => {
    api.get('/kelas').then((res) => setKelas(res.data.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4">Daftar Kelas</h1>
      <ul className="space-y-2">
        {kelas.map((k) => (
          <li key={k.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">{k.nama}</h2>
            <p>Wali Kelas: {k.waliKelas}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
