import Order from "../models/Order.js"
import User from "../models/User.js";



const createOrder = async (order)=>{

    const result = await Order.create(order);
    return result;
}


const getByUser = async()=>{

    const result = await Order.findOne(User)
    return result;
} 


const updateStatus  = () => {
    
}

export default {createOrder, getByUser, updateStatus}