import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Ye function connection check karega
const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ PostgreSQL Database connected successfully!');
    client.release(); // Connection wapas pool mein bhej dena
  } catch (err) {
    console.error('❌ Database connection error:', err.message);
  }
};

connectDB();

export default pool;