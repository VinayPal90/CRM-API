import express from 'express';
import { addDeal, getCustomerDeals } from '../controllers/dealController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Dono routes protected hain
router.post('/', verifyToken, addDeal);
router.get('/customer/:id', verifyToken, getCustomerDeals);

export default router;