import mongoose from "mongoose";
import {v4 as uuidv4 } from 'uuid';

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, //Id save garnu ko lagi chai yoh gareko
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: String,
    default: () => uuidv4(),
  },
  cartItems: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    require: true,
  },
  orderStatus: {
    type: String,
    enum: ["pending", "confirmed", "shipping", "delivered", "cancelled"],
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed", "notPaid"],
    default: "notPaid",
  },
  paymentMethod: {
    type: String,
    enum: ["COD", "Khalti"],
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
