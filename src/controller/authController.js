import authService from "../services/authService.js";


const register  = async(req,res)=>{

    try{
        const {email, phone, userName, password, confirmPassword} = req.body;

    if(!password || !email || !phone || !confirmPassword || !userName ) {
        return res.status(400).json({message: "User credential is missing."})
    }

    if( password !== confirmPassword) {return res.status(400).json({
        message: "Password and confirm password does not match."
    })}

    const data = await authService.register({
        email : email,
        phone : phone,
        userName : userName,
        password: password
    })

    res.status(200).json({
        message: "User registered successful",
        data
    })
    }catch(error){
        console.log(error.message)
        res.status(500).json({
            message: "Error occured to register",
            error: error.message
        })
    }
  
}

export {register}