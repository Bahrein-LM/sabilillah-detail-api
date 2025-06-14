const express = require('express');
const router = express.Router();
const api = require('../axiosClient');

router.get('/', async (req, res) => {
  try {
    const { siswaId } = req.query;
    const { data } = await api.get('', {
      params: { endpoint: 'nilai' }
    });
    // filter by siswaId jika ada
    const filtered = siswaId
      ? data.data.filter((n) => n.siswaId === siswaId)
      : data.data;
    res.json({ status: data.status, message: data.message, data: filtered });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
