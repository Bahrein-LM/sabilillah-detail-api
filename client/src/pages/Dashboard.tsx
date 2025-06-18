import api from '@/api/axiosClient'
import { Card, CardHeader } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'
import type { Nilai, Siswa } from '@/types'
import { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis
} from 'recharts';


const Dashboard = () => {

  const [nilai, setNilai] = useState<Nilai[]>([])
  const [siswas, setSiswas] = useState<Siswa[]>([])

  useEffect(() => {
    Promise.all([
      api.get<{ data: Nilai[] }>('/nilai'),
      api.get<{ data: Siswa[] }>('/siswa')
    ]).then(([nilaiRes, siswaRes]) => {
      setNilai(nilaiRes.data.data)
      setSiswas(siswaRes.data.data)
    })
  }, []);

  const byMapel: Record<string, number[]> = {}

  nilai.forEach( n => {
    byMapel[n.mataPelajaran] ||= []
    byMapel[n.mataPelajaran].push(n.nilai)
  })

  const mapelData = Object.entries(byMapel).map(([mapel, values]) => ({
    mapel,
    avg: Math.round(values.reduce((a, b) => a + b, 0) / values.length)
  }))

  // Debugging: pastikan mapelData valid
  console.log('mapelData:', mapelData)
  mapelData.forEach((d, i) => {
    if (d.avg == null || isNaN(d.avg)) {
      console.warn(`mapelData[${i}] has invalid avg:`, d)
    }
  })

  const mapelConfig = {
    avg: {
      label: 'Nilai Rata-Rata',
      color: '#089316FF'
    }
  } satisfies ChartConfig

  const countByKelas: Record<string, number> = {}
  
  siswas.forEach( s => {
    countByKelas[s.namaKelas] = (countByKelas[s.namaKelas] || 0) + 1
  })

  const kelasData = Object.entries(countByKelas).map(([kelas, count]) => ({
    kelas, count
  }))

  const kelasConfig = {
    count: {
      label: 'Jumlah Siswa',
      color: '#097a17'
    }
  } satisfies ChartConfig;

  return (
    <div className='h-screen flex-1 bg-[#021405] space-y-8 flex flex-col xl:flex-row xl:justify-center md:flex-col'>
      <Card className="mx-10 mt-20 rounded-md border w-85 h-80 border-green-950 hover:shadow-green-500 hover:shadow-2xl">
        <CardHeader className="font-extrabold font-2xl font-mono">
          Rata-Rata Nilai Mata Pelajaran
        </CardHeader>

        <ChartContainer 
          config={mapelConfig}
          className='min-h-[200px] w-full' 
        >

          <BarChart data={mapelData}>

            <CartesianGrid vertical={false} />
              <XAxis 
                dataKey="mapel"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(val) => String(val).slice(0, 5)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey='avg' fill='#089316FF' radius={4} />
          </BarChart>
        </ChartContainer>
      </Card>

      <Card className="mx-10 mt-20 rounded-md border w-85 h-80 border-green-950 hover:shadow-green-500 hover:shadow-2xl">
        <CardHeader className="font-extrabold font-2xl font-mono">
          Jumlah Siswa Per-Kelas
        </CardHeader>
        <ChartContainer 
          config={kelasConfig}
          className='mb-2'
        >
          <BarChart data={kelasData}>
            <XAxis 
              dataKey="kelas"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={val => String(val).slice(0, 5)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill='#086012FF' radius={4} />
          </BarChart>
        </ChartContainer>
      </Card>

    </div>
  )
}

export default Dashboard
