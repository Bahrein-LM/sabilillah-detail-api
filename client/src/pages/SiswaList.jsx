import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axiosClient';

export default function SiswaList() {

  const [siswas, setSiswas] = useState([]);
  useEffect(() => {
    api.get('/siswa').then((res) => setSiswas(res.data.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4">Daftar Siswa</h1>
      <table className="min-w-full bg-white shadow rounded">
        <thead className='bg-green-300'>
          <tr>
            <th className="p-2">Nama</th>
            <th className="p-2">Kelas</th>
            <th className="p-2">Wali Kelas</th>
          </tr>
        </thead>
        <tbody>
          {siswas.map((s) => (
            <tr key={s.id} className="hover:bg-gray-50">
              <td className="p-2 text-center">
                <Link to={`/siswa/${s.id}`} className="text-green-600">
                  {s.nama}
                </Link>
              </td>
              <td className="p-2 text-center">{s.namaKelas}</td>
              <td className="p-2 text-center">{s.waliKelas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
