import React, { useState } from "react";
import TextField from "../components/TextField";
import { type } from "os";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [UserName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const registerField = () => [
    {
      id: "email",
      label: "Email",
      placeholder: "email@gmail.com",
      type: "email"
    },
    {
      id: "password",
      label: "Password",
      placeholder: "*******",
      type: "password"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <div>Register</div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border-2 p-4">
        {registerField.map(({id, label, placeholder, type})=>{
          <TextField
          id= {id}
          label= {label}
          placeholder={placeholder}
          type={type}
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
         />
        })}

        {/* UserName */}
        {/* <TextField
          label={"UserName"}
          id="UserName"
          placeholder="Jhon Doe"
          value={UserName}
          onChange={(e) => setUserName (e.target.value)}
         /> */}

        {/* Email */}
        {/* <TextField
          label={"Email"}
          id="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}

        {/* Phone */}
        {/* <TextField
          label={"Phone"}
          id="Phone"
          placeholder="98xxxxxxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /> */}

        {/* Password */}
        {/* <TextField
          type="password"
          label={"Password"}
          id={"password"}
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        {/* confirmPassword */}
        {/* <TextField
          type="confirmPassword"
          label={"confirmPassword"}
          id={"ConfirmPassword"}
          placeholder=""
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /> */}
      </form>
      <button type="submit"> Submit</button>
    </div>
  );
};

export default Register;