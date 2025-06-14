import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api/axiosClient';

export default function NilaiDetail() {
  const { id } = useParams();
  const [nilai, setNilai] = useState([]);
  useEffect(() => {
    api.get('/nilai', { params: { siswaId: id } }).then((res) => {
      setNilai(res.data.data);
    });
  }, [id]);

  return (
    <div>
      <h1 className="text-2xl mb-4">Nilai Siswa {id}</h1>
      <table className="min-w-full bg-white shadow rounded">
        <thead className='bg-green-300'>
          <tr>
            <th className="p-2">Mata Pelajaran</th>
            <th className="p-2">Nilai</th>
            <th className="p-2">Semester</th>
          </tr>
        </thead>
        <tbody>
          {nilai.map((n) => (
            <tr key={n.id} className="hover:bg-gray-50">
              <td className="p-2 text-center">{n.mataPelajaran}</td>
              <td className="p-2 text-center">{n.nilai}</td>
              <td className="p-2 text-center">{n.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
