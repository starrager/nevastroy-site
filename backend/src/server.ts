import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
const PORT=process.env.PORT||5178;

app.use(cors());
app.use(express.json());

import requestRoutes from './routes/database.routes'
app.use('/api',requestRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});