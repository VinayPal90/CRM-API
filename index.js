import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import authRoutes from './routes/authRoutes.js'; 
import customerRoutes from './routes/customerRoutes.js';
import dealRoutes from './routes/dealRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/customers', customerRoutes);
app.use('/deals', dealRoutes);

// Basic Test Route
app.get('/', (req, res) => {
  res.send('🚀 CRM API is running perfectly!');
});

// Server Listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n📡 Server is running on port ${PORT}`);
  console.log(`🔗 Local: http://localhost:${PORT}`);
});