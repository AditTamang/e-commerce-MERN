import mongoose from "mongoose"

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db is connected succefully")
    }catch(error){
        console.log(error.message)
    }
}