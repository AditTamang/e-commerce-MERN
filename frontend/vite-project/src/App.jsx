import React, { useContext, createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyOtp from './pages/VerifyOtp';
import Navbar from './components/Navbar';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import Pagec from './pages/Pagec';
import { Toaster } from "react-hot-toast";

const MyContext = createContext();
export const useMyContext = () => useContext(MyContext);

const App = () => {
  const name = "Adit";
  const age = 21;
  const email = "adit@example.com";

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ name, age, email }}>
        <Navbar />
        <Toaster position="top-right" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/a' element={<PageA />} />
          <Route path='/b' element={<PageB />} />
          <Route path='/c' element={<Pagec />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/verify-otp' element={<VerifyOtp />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default App;
