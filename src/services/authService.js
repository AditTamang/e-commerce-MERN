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

const login = async(data)=>{

    const doEmailExist = await User.find({email:data.email})

    if(!doEmailExist.length > 0){
        throw new Error("Invalid email user doesn't exist")
    }
    
    const dbPassword = doEmailExist[0].password

    const isPasswordMatch = bcrypt.compareSync(data.password,dbPassword)

    if(isPasswordMatch){
        return doEmailExist[0];
    }else{
        throw new Error("Invalid password")
    }
}



export default { register , login}