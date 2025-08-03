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

// const getOrderById = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const data = await OrderService.getOrderByUserId(userId);
//     res.status(200).json({
//       message: "User's Order Fetches successfully",
//     });
//   } catch (error) {
//     console.log(error.message);
//     res
//       .status(400)
//       .json({ error: error.message, message: "Error to get Order" });
//   }
// };

const getOrderByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await OrderService.getOrderByUserId(userId);
    res.status(200).json({
      message: "User's Order Fetchec successfully",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ error: error.message, message: "Error to get Order" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await OrderService.getOrderById(id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({
      message: "error to fetch the current order",
      error: error.message,
    });
  }
};

const updatePaymentStatus = async (req, res) => {
  try {
    const status = req.body.paymentStatus;
    const id = req.params.id;
    const data = await orderService.updatePaymentStatus(id, status);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({
      meesage: "Failed to update payment status",
      error: error.message,
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.id;
    const status = req.body.orderStatus;
    const data = await OrderService.updateOrderStatus(orderId, status);
    res.status(200).json({ data });
    console.log(data)
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "Error updating error ststus ",
      success: false,
    });
  }
};

export {
  createOrder,
  getOrderById,
  updateOrderStatus,
  getOrderByUserId,
  updatePaymentStatus,
};
