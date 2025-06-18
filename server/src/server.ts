import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import siswaRoute from "./routes/siswa";
import nilaiRoute from "./routes/nilai";
import kelasRoute from './routes/kelas';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/siswa', siswaRoute);
app.use('/api/nilai', nilaiRoute);
app.use('/api/kelas', kelasRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})