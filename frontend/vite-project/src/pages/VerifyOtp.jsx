// ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../components/TextField.jsx';
import { handlePostOperation } from '../config/handlePostOperation.js';

const VerifyOtp = () => {
  const [otp, setOtp] = useState("")
  const navigate = useNavigate();
  
  const email = localStorage.getItem("email")
  console.log(email)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handlePostOperation('/auth/verify-otp',
     { otp,email}
    );
    console.log(response)

    if (response.status === 200) {
      alert(response.data.message || "OTP send successfully"),

      setTimeout(() => {
        navigate("/reset-password");
      }, 1500);
    } else {
      alert(response.response.data.error || "Error verifying OTP");
    }
    console.table(otp);
  };



    return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>Verify OTP</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            <TextField
              key={"otp"}
              id={"otp"}
              name={"otp"}
              label={"Your OTP"}
              placeholder={"123456"}
              type={"text"}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;