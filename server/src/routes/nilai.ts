import { Router, Request, Response } from 'express';
import client from '../axiosClient';
import { ApiResponse, Nilai } from '../types';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    
    const { data } = await client.get<ApiResponse<Nilai>>('', {
      params: { endpoint: 'nilai' }
    });

    const siswaId = req.query.siswaId as string | undefined;

    const filtered = siswaId
      ? data.data.filter((n) => n.siswaId === siswaId)
      : data.data;
    
    res.json({ 
        status: data.status, 
        message: data.message, 
        data: filtered 
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
