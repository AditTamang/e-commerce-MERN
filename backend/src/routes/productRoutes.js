import express from "express";

import {
  createProduct,
  getProductById,
  getAllProduct,
  deleteProductById,
  updateProductById,
} from "../controller/productController.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { uploads } from "../config/claudinary.js";
import gemini from "../utils/gemini.js";

const router = express.Router();

router.post("/createProduct", uploads.single("image"), createProduct);

router.get("/getAllProduct", getAllProduct);

router.get("/getProductById/:id", getProductById);

router.delete("/deleteProductById/:id", isLoggedIn, isAdmin, deleteProductById);

router.put(
  "/updateProductById/:id",
  uploads.single("image"),
  updateProductById
);

router.post("/gemini", async (req, res) => {
  const product = {
    productName: "Macbook Air M4",
    brand: "Apple",
    category: "Laptop",
  };

  const result = await gemini(product);
  console.log(result);

  res.send(result);

  // console.log(result.data);
  // res.send(result.data);

  //   curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$YOUR_API_KEY" \
  // -H 'Content-Type: application/json' \
  // -X POST \
  // -d '{
  //
  // }'
});

export default router;
