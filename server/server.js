const express = require('express');
const cors = require('cors');
require('dotenv').config();

const siswaRoute = require('./routes/siswa');
const nilaiRoute = require('./routes/nilai');
const kelasRoute = require('./routes/kelas');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/siswa', siswaRoute);
app.use('/api/nilai', nilaiRoute);
app.use('/api/kelas', kelasRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
