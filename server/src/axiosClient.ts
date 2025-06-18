import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const client = axios.create({
    baseURL: process.env.API_BASE,
    headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
    }
})

export default client;