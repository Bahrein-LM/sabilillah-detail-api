import { Route, Routes } from "react-router-dom"
import SiswaList from "./pages/SiswaList"
import KelasList from "./pages/KelasList"
import Dashboard from "./pages/Dashboard"
import NilaiDetail from "./pages/NilaiDetail"
import SidebarNav from "./components/SidebarNav"

function App() {

  return (
    <div className="w-full flex">
      
      {/* SIDEBAR */}
      <div>
        <SidebarNav />
      </div>

      <Routes>
        <Route path="/" element={<SiswaList />} />
        <Route path="/siswa/:id" element={<NilaiDetail />} />
        <Route path="/kelas" element={<KelasList />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
