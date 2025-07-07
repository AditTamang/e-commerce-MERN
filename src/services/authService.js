import bcrypt from "bcrypt"
import User from "../models/User.js"

const register = async (data)=>{

    const hashedPassword = bcrypt.hashSync(data.password,10)

    // console.log(hashedPassword)

    const email = data.email

    const userExist = await User.findOne({email})
    console.log(userExist)

    if(userExist){
        new Error('user already exists.')
    }

    return await User.create({
        email : data.email,
        password: hashedPassword,
        userName: data.userName,
        phone: data.phone 
    })
    console.log(userExist)

}

// register({password: "MyPassword", email : "admin@gmail.com"})


export default { register }