import axios from "axios";
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
  const order = await Order.findOne({ pidx });
  if (!order) {
    throw new Error("No order found");
  }

  console.log(order.totalAmount);
  // console.log(userId)

  if (order.totalAmount !== totalAmount) {
    throw new Error("Some error occured warning!!");
  }
  // if (order.user !== userId) {
  //   throw new Error("Invalid Operations");
  // }

  const result = await axios.post(
    "https://dev.khalti.com/api/v2/epayment/lookup/",
    { pidx },
    {
      headers: {
        Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(result);

  if (result.data.status !== "Completed") {
    throw new Error("Payment is not completed");
  }
  console.log(result.data.total_amount, order.totalAmount * 100);
  if (result.data.total_amount !== order.totalAmount * 100) {
    throw new Error("Amount didn't match.");
  }

  return await Order.findOneAndUpdate({ pidx }, { paymentStatus: "COMPLETED" });

  // const results = await Order.findOneAndUpdate(
  //   { pidx },
  //   { paymentStatus: "COMPLETED" }
  // );
};

export default {
  createOrder,
  getOrderById,
  getOrderByUserId,
  updateOrderStatus,
  updatePaymentStatus,
  updateKhaltiPaymentStatus,
};
