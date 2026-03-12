import * as CustomerModel from '../models/customerModel.js';

export const addCustomer = async (req, res) => {
  try {
    const customer = await CustomerModel.createCustomer(req.body, req.user.id);
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const offset = (page - 1) * limit;
    const customers = await CustomerModel.getAllCustomers(limit, offset, search);
    res.json({ page, limit, data: customers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Customer details update karne ke liye
export const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, company, status } = req.body;
    const result = await pool.query(
      'UPDATE customers SET name=$1, email=$2, phone=$3, company=$4, status=$5 WHERE id=$6 RETURNING *',
      [name, email, phone, company, status, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Customer delete karne ke liye
export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM customers WHERE id = $1', [id]);
    res.json({ message: 'Customer deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};