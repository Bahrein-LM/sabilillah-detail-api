import api from "@/api/axiosClient";
import { Card, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Nilai } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NilaiDetail = () => {
  
  const { id } = useParams<{ id: string }>();
  const [nilai, setNilai] = useState<Nilai[]>([]);

  useEffect(() => {
    api.get<{ data: Nilai[] }>('/nilai', {
      params: { siswaId: id }
    })
      .then(res => setNilai(res.data.data))
  }, [id])


  return (
    <div className="h-screen flex-1 bg-[#021405] space-y-6">
      <Card className="mx-10 rounded-md border border-green-950 hover:shadow-green-500 hover:shadow-2xl xl:my-[13%] xl:h-90 xl:mx-100 md:my-[25%] md:h-80 md:mx-20 my-[40%] h-80">
        <CardHeader className="font-extrabold px-10 font-mono text-center">
          Nilai Siswa dengan nomor {id}
        </CardHeader>
        <hr className="border-green-950 border-4" />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-extrabold text-center">Mata Pelajaran</TableHead>
              <TableHead className="font-extrabold text-center">Nilai</TableHead>
              <TableHead className="font-extrabold text-center">Semester</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nilai.map( n  => (
              <TableRow key={n.id}>
                <TableCell className="text-center">{n.mataPelajaran}</TableCell>
                <TableCell className="text-center">{n.nilai}</TableCell>
                <TableCell className="text-center">{n.semester}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default NilaiDetail;
