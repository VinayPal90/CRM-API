import pool from '../config/db.js';

export const createCustomer = async (data, userId) => {
  const { name, email, phone, company } = data;
  const query = 'INSERT INTO customers (name, email, phone, company, created_by) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const result = await pool.query(query, [name, email, phone, company, userId]);
  return result.rows[0];
};

export const getAllCustomers = async (limit, offset, search) => {
  const query = `
    SELECT * FROM customers 
    WHERE name ILIKE $1 OR email ILIKE $1 
    ORDER BY created_at DESC 
    LIMIT $2 OFFSET $3`;
  const result = await pool.query(query, [`%${search}%`, limit, offset]);
  return result.rows;
};