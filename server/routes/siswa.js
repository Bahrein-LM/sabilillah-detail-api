const express = require('express');
const router = express.Router();
const api = require('../axiosClient');

router.get('/', async (req, res) => {
  try {
    const { data } = await api.get('', { params: { endpoint: 'siswa' } });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
