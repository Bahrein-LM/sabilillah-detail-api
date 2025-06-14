import { useEffect, useState } from 'react';
import api from '../api/axiosClient';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function Dashboard() {
  const [nilai, setNilai] = useState([]);
  const [siswas, setSiswas] = useState([]);

  useEffect(() => {
    Promise.all([api.get('/nilai'), api.get('/siswa')]).then(
      ([nRes, sRes]) => {
        setNilai(nRes.data.data);
        setSiswas(sRes.data.data);
      }
    );
  }, []);

  // 1) Rata2 nilai per mata pelajaran
  const byMapel = {};
  nilai.forEach((n) => {
    if (!byMapel[n.mataPelajaran]) byMapel[n.mataPelajaran] = [];
    byMapel[n.mataPelajaran].push(n.nilai);
  });
  const mapelLabels = Object.keys(byMapel);
  const mapelAverages = mapelLabels.map(
    (m) =>
      Math.round(
        byMapel[m].reduce((a, b) => a + b, 0) / byMapel[m].length
      )
  );

  // 2) Jumlah siswa per kelas
  const countByKelas = {};
  siswas.forEach((s) => {
    countByKelas[s.namaKelas] = (countByKelas[s.namaKelas] || 0) + 1;
  });
  const kelasLabels = Object.keys(countByKelas);
  const kelasCounts = kelasLabels.map((k) => countByKelas[k]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl mb-2">Rata-rata Nilai per Mata Pelajaran</h2>
        <Bar
          data={{
            labels: mapelLabels,
            datasets: [{ label: 'Nilai Rata-rata', data: mapelAverages }],
          }}
          options={{ responsive: true }}
        />
      </div>
      <div>
        <h2 className="text-xl mb-2">Jumlah Siswa per Kelas</h2>
        <Bar
          data={{
            labels: kelasLabels,
            datasets: [{ label: 'Jumlah Siswa', data: kelasCounts }],
          }}
          options={{ responsive: true }}
        />
      </div>
    </div>
  );
}
