import { useState } from "react";
import registerField from "../config/registerField";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import TextField from "../components/TextField";
import { BASE_URL, registerInitialValue } from "../config/constant";

const Register = () => {
  // const navigate = useNavigate();

  const [formData, setFormData] = useState(registerInitialValue);

  const handleSaveCookie = async () => {
    Cookies.set("name","Adit")
    // try {
    //   await axios.get("http://localhost:4000/test", {
    //     withCredentials: true,
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const handleClearCookie = async () => {
    Cookies.remove("name")
    // try {
    //   await axios.get(`${BASE_URL}/clear-cookie`, { withCredentials: true })
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const name = Cookies.get("name");

  const handlePostOperation = async (url, data) => {
    try {
      const result = await axios.post(url, data);
      return result;
      // console.table(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await handlePostOperation(

      "http://localhost:4000/api/auth/register",
      // "/auth/register",
      formData
    );

    if (response.status === 201) {
      alert("User registered Successfully!")
      setFormData(registerInitialValue)
    } else {
      alert("User registration failed!")
    }
    // navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      {name}
      <button onClick={handleClearCookie} className="border">
        Clear Cookie
      </button> 
      <button onClick={handleSaveCookie} className="border">
        Add Cookie
      </button>
      <div>Register</div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-4">
        {registerField.map(({ id, label, placeholder, type, name }) => (
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
