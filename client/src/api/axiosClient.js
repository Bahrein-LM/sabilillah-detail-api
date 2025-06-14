import axios from 'axios';

const client = axios.create({
  baseURL: 'https://sabilillah-detail-api-server.vercel.app/api',
});

export default client;
