import express from 'express'
import { createUser } from '../controller/userController.js'

const router  = express.Router()

router.get('/user',(req,res)=>{
    res.send("router page")
})

router.post('/createUser', createUser)

export default router;