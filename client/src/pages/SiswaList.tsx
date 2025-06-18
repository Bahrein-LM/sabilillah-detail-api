import api from "@/api/axiosClient"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { type Siswa } from "@/types"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const SiswaList = () => {

  const [siswas, setSiswas] = useState<Siswa[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    api.get<{ data: Siswa[] }>('/siswa')
      .then(res => setSiswas(res.data.data));
    
  }, [])

  return (
    <div className="h-screen flex-1 bg-[#021405] space-y-6">
      <Card className="m-10 rounded-md border border-green-950 hover:shadow-green-500 hover:shadow-2xl">
        <header className="font-extrabold px-10 font-mono" >Daftar Siswa</header>
        <hr />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-extrabold text-center">Nama</TableHead>
              <TableHead className="font-extrabold text-center">Kelas</TableHead>
              <TableHead className="font-extrabold text-center">Wali Kelas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {siswas.map( siswa => (
              <TableRow 
                key={siswa.id} 
                onClick={() => navigate(`/siswa/${siswa.id}`)}
                className="cursor-pointer hover:bg-gray-500"
              >
                <TableCell className="text-center">{siswa.nama}</TableCell>
                <TableCell className="text-center">{siswa.namaKelas}</TableCell>
                <TableCell className="text-center">{siswa.waliKelas}</TableCell>
              </TableRow>
            ) )}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default SiswaList
