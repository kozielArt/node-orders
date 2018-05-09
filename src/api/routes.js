import express from 'express';
import { handleOrders } from './controllers/orders-controller';
import { getOrdersHistory } from './models/orders';
const router = express.Router();

router.post('/orders', async (req, res) => {
  const { orders } = req.body;
  const result = await handleOrders(orders);
  res.status(200);
  res.send(result);
});

router.get('/orders/history', async (req, res) => {
  const result = await getOrdersHistory()
  res.status(200);
  res.send(result);
})

export default router;