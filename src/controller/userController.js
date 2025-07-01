import userService from "../services/userService.js"

const createUser = async (req, res)=>{

    const {userName, password, phone, email, confirmPassword} = req.body

    const data = await userService.createUser(req.body)

    res.send(data)

}


export {createUser} // Named export 