import express from 'express';

import { 
  addCustomer, 
  getCustomers, 
  updateCustomer,   
  deleteCustomer   
} from '../controllers/customerController.js'; 

import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, addCustomer);
router.get('/', verifyToken, getCustomers);
router.put('/:id', verifyToken, updateCustomer);   
router.delete('/:id', verifyToken, deleteCustomer);

export default router;