import express from 'express'
import { isLoggedIn } from '../middleware/isLoggedIn.js'
import createOrder from '../controller/orderController.js'

const router = express.Router()

router.post('/createOrder', isLoggedIn, createOrder)

export default router