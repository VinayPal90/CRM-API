import pool from '../config/db.js';

// models/dealModel.js

export const createDeal = async (customer_id, value, stage) => {
  
  const query = 'INSERT INTO deals (customer_id, amount, stage) VALUES ($1, $2, $3) RETURNING *';
  
  const result = await pool.query(query, [customer_id, value, stage]);
  return result.rows[0];
};

export const getDealsByCustomer = async (customerId) => {
  const query = 'SELECT * FROM deals WHERE customer_id = $1';
  const result = await pool.query(query, [customerId]);
  return result.rows;
};