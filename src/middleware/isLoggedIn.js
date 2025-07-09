import jwt from 'jsonwebtoken'
import { verifyToken } from '../helpers/token'

const isLoggedIn = (req,res,next)=>{
    
    try{
        const token = req.cookies.authToken

        if(!token){throw new Error("User Not Authenticate")}
    console.log(token)
    
    // const decoded = jwt.verify(token,"secretkey")
    const decoded = verifyToken(token)
    
    console.log(decoded)

    req.user = decoded
    next() //arko function pani chalxa userroutes.js ko 
    
    // res.send("cookie")
    }catch(error){
        res.send(error.message)
    }
}


export {isLoggedIn}