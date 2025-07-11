import express from 'express'
import { register , login, forgotPassword} from '../controller/authController.js'

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/forgotPassword',forgotPassword)

export default router;