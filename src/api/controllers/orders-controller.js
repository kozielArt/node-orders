const uuidv1 = require('uuid/v1');
import { saveOrders } from "../models/orders";

export const handleOrders = async (ordersList) => {
  const trucks = [];
  ordersList.reduce((previous, current) => {
    if (previous.weight + current.weight <= 1000) {
      return trucks.push({
        truckId: uuidv1(),
        load: [previous, current]
      })
    } else {
      return trucks.push({
        truckId: uuidv1(),
        load: [current]
      })
    }
  });

  const price = handlePriceCalculation(ordersList);
  await saveOrders({
    price,
    trucks
  });

  return {
    price,
    trucks
  };
}

const handlePriceCalculation = (orders) => {
  let price = 0;
  orders.map(order => {
    if (order.weight <= 400) {
      price += 0.01 * order.weight;
    } else {
      price += 0.005 * order.weight + 2;
    }
  });
  return price;
};

