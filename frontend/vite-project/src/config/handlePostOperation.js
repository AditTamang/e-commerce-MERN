import axios from "axios"
import { BASE_URL } from "./constant"

export const handlePostOperation = async (url,data)=>{
    try{
        const result = await axios.post(`${BASE_URL}${URL}`, data);
        return result;
    }catch(error){
        return error;
    }
}