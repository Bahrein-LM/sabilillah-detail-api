import { Router, Request, Response } from 'express';
import client from '../axiosClient';
import { ApiResponse, Kelas } from '../types';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    
    const { data } = await client.get<ApiResponse<Kelas>>('', {
      params: { endpoint: 'kelas' }
    });

    res.json(data);
    
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
