import express from 'express'
import { createUser } from '../controller/userController.js'
import {isLoggedIn} from '../middleware/isLoggedIn.js'

const router  = express.Router()

router.get('/',isLoggedIn,(req,res)=>{
    const user = req.user
    console.log("I am decoded  routes",user)
    res.send("router page")
})

router.post('/createUser', createUser)

export default router;