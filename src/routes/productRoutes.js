import express from "express"


import  {createProduct, getProductById, getAllProduct, deleteProductById, updateProductById} from "../controller/productController.js"

const router = express.Router();

router.post("/createProduct", createProduct)


router.get("/getAllProduct", getAllProduct)

router.get("/getProductById/:id", getProductById)

router.delete("/deleteProductById/:id", deleteProductById)

router.put("/updateProductById/:id", updateProductById)


export default router