import OrderService from "../services/OrderService.js";
import axios from "axios";

const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const order = req.body;
    order.user = userId;

    if (order.paymentMethod === "KHALTI") {
      console.log(order);

      const totalAmount = order.totalAmount;

      const options = {
        return_url: "http://localhost:5173/dashboard",
        website_url: "http://localhost:5173/",
        amount: totalAmount * 100,
        purchase_order_id: Date.now(),
        purchase_order_name: `order- ${Date.now()}`,
      };

      const result = await axios.post(
        "https://dev.khalti.com/api/v2/epayment/initiate/",
        options,
        {
          headers: {
            Authorization: `KEY ${process.env.KHALTI_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (result.data.pidx) {
        order.pidx = result.data.pidx;

        const khaltiResult = await OrderService.createOrder(order);

        khaltiResult.paymentUrl = result.data.payment_url;

        console.log(result.data);
        return res.status(200).json({
          data: khaltiResult,
          payment_url: result.data.payment_url,
        });
      } else {
        throw new Error("Khalti payment initiate failed.!");
      }
    }

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
    const data = await OrderService.updatePaymentStatus(id, status);
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
    console.log(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "Error updating error ststus ",
      success: false,
    });
  }
};

const updateKhaltiPaymentStatus = async (req, res) => {
  try {
    const { pidx, totalAmount } = req.body;
    const userId = req.user.id;
    const data = await OrderService.updateKhaltiPaymentStatus(pidx, totalAmount, userId);
    res.status(200).send("Update payment Status");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Failed to update Payment Status");
  }
};

export {
  createOrder,
  getOrderById,
  updateOrderStatus,
  getOrderByUserId,
  updatePaymentStatus,
  updateKhaltiPaymentStatus,
};
