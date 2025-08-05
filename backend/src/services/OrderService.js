import Order from "../models/Order.js";
import User from "../models/User.js";

const createOrder = async (order) => {
  const result = await Order.create(order);
  return result;
};

const getOrderById = async (id) => {
  return await Order.findById(id);
};

const getOrderByUserId = (userId) => {
  return Order.find({ user: userId });
};

const updateOrderStatus = async (id, status) => {
  console.log(status);
  console.log(id);
  return await Order.findByIdAndUpdate(
    id,
    {
      orderStatus: status,
    },
    { new: true }
  ); //New true garyo bhane chai changes imediately dekhinxa
};

const updatePaymentStatus = async (id, status) => {
  await Order.findByIdAndUpdate(
    id,
    {
      paymentStatus: status,
    },
    { new: true }
  );
};

const updateKhaltiPaymentStatus = async (pidx, totalAmount, userId) => {
  const order = await order.findOne({ pidx });
  if (!order) {
    throw new Error("No order found");
  }
  if (order.totalAmount !== totalAmount) {
    throw new Error("Some error occured warning!!");
  }
  if(order.user !== userId){throw new Error("Invalid Operations")}

  const result = await order.findOneAndUpdate({pidx},{paymentStatus: "COMPLETED"})
};

export default {
  createOrder,
  getOrderById,
  getOrderByUserId,
  updateOrderStatus,
  updatePaymentStatus,
  updateKhaltiPaymentStatus,
};
