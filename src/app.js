import express from 'express'
import { createUser} from '../src/controller/userController.js'
import userRoutes from '../src/routes/userRoutes.js'
import { configDotenv } from 'dotenv'
import connectDb from './config/db.js'

configDotenv()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// const express = require('express')

connectDb()

app.get('/',(req,res)=>{
    res.status(200).json({
        message: " this is thsw app.js"
    })
})


app.use('/api', userRoutes)
app.use("/api/product", ()=>{})

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`The port is running in the${port}`)
})