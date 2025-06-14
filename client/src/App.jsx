import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SiswaList from './pages/SiswaList';
import NilaiDetail from './pages/NilaiDetail';
import KelasList from './pages/KelasList';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<SiswaList />} />
          <Route path="/siswa/:id" element={<NilaiDetail />} />
          <Route path="/kelas" element={<KelasList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
