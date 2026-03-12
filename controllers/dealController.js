import * as DealModel from '../models/dealModel.js';

export const addDeal = async (req, res) => {
  try {
    const { customer_id, value, stage } = req.body;
    const deal = await DealModel.createDeal(customer_id, value, stage);
    res.status(201).json(deal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCustomerDeals = async (req, res) => {
  try {
    const deals = await DealModel.getDealsByCustomer(req.params.id);
    res.json(deals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};