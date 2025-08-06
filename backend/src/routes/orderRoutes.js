import express from "express";
import { isLoggedIn } from "../middleware/isLoggedIn.js";
import {
  createOrder,
  getOrderById,
  getOrderByUserId,
  updateKhaltiPaymentStatus,
  updateOrderStatus,
  updatePaymentStatus,
} from "../controller/orderController.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = express.Router();

router.post("/createOrder", isLoggedIn, createOrder);
router.get("/getOrderById/:id", getOrderById);
router.get("/getOrderByUser", getOrderByUserId);
router.post("/khaltiUpdate", isLoggedIn, updateKhaltiPaymentStatus);
router.post("/updateOrderStatus/:id", isLoggedIn, isAdmin, updateOrderStatus);
router.post(
  "/updatePaymentStatus/:id",
  isLoggedIn,
  isAdmin,
  updatePaymentStatus,
  updateKhaltiPaymentStatus
);
router.post(
  "/khaltiPaymentStatusUpdate",
  isLoggedIn,
  updateKhaltiPaymentStatus
);

export default router;
