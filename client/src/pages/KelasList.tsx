import api from '@/api/axiosClient';
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type { Kelas } from '@/types'
import { useEffect, useState } from 'react'

const KelasList = () => {
  
  const [kelas, setKelas] = useState<Kelas[]>([]);

  useEffect(() => {

    api.get<{ data: Kelas[] }>('/kelas')
      .then(res => setKelas(res.data.data));
    
  }, []);


  return (
    <div className='h-screen flex-1 bg-[#021405] space-y-6'>
      {kelas.map( kel => (
        <Card 
          className="mx-20 my-10 xl:w-100 md:w-70 rounded-md border-4 border-green-950 hover:shadow-green-500 hover:shadow-2xl mb-4"
          key={kel.id}
        >
          <CardHeader className='font-extrabold'>
            {kel.nama}
          </CardHeader>
          <CardContent>
            {kel.waliKelas}
          </CardContent>
        </Card>
      ) )}
      
    </div>
  )
}

export default KelasList
