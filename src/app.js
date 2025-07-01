import express from 'express'
import { createUser} from '../src/controller/userController.js'

import userRoutes from '../src/routes/userRoutes.js'
import { configDotenv } from 'dotenv'

configDotenv()

// const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({
        message: " this is thsw app.js"
    })
})


app.use('/api', userRoutes)

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`The port is running in the${port}`)
})