// ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../components/TextField.jsx';
import { resetField } from '../config/loginField.js';
import { handlePostOperation } from '../config/handlePostOperation.js';

const ResetPassword = () => {
  const intialValue = {
    password: "",
    confirmPassword: ""
  }
  const [formData, setFormData] = useState(intialValue)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    const response = await handlePostOperation('/auth/reset-password',
      {
        password: formData.password,
      }
    );
    console.log(response)

    if (response.status === 200) {
      alert(response.data.message || "Password reset successful"),
        setTimeout(() => {
          navigate("/login");
        }, 1500);
    } else {
      alert(response.response.data.error || "Error reseting password");
    }
  };



  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>Reset Password</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            {resetField.map(({ id, label, placeholder, type, name }) => (
              <TextField
                key={name}
                id={id}
                name={name}
                label={label}
                placeholder={placeholder}
                type={type}
                value={formData[name]}
                onChange={handleChange}
              />
            ))}

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;