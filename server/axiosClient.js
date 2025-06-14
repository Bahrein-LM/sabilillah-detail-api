// axiosClient.js
const axios = require('axios');
require('dotenv').config();

const client = axios.create({
  baseURL: process.env.API_BASE,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`
  }
});

module.exports = client;
