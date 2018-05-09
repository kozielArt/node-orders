
import config from '../../../config.json';
const MongoClient = require('mongodb').MongoClient;
let db;

export const saveOrders = async (orders) => {
  const db = await loadDB();
  const result = await db.collection('ordersHistory').insert(orders);
};

export const getOrdersHistory = async () => {
  const db = await loadDB();
  const result = await db.collection('ordersHistory').find({}).toArray();
  return result;
};

const loadDB = async () => {
  if (db) {
    return db;
  }
  try {
    const client = await MongoClient.connect(config.mongoUrl);
    db = client.db('orders');
  } catch (err) {
    console.olog(err)
  };
  return db;
};
