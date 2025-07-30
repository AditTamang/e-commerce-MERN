import OrderService from "../services/OrderService.js";

const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const order = req.body;
    order.user = userId;

    const data = await OrderService.createOrder(order);

    console.log(data);

    res.status(200).json({
      data,
      message: "Order created Successfully.",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: error.message,
      message: "error to create Order",
    }),
      (success = false);
  }
};

export default createOrder;
