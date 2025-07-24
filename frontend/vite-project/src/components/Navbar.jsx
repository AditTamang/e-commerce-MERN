import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navbarFields = [
    {
      name: "Home",
      pathname: "/",
    },
    {
      name: "Register",
      pathname: "/register",
    },
    {
      name: "Login",
      pathname: "/login",
    },
    {
      name: "Forgot Password",
      pathname: "/forgot-password",
    },
    {
      name: "Verify OTP",
      pathname: "/verify-otp",
    },
    {
      name: "Reset Password",
      pathname: "/reset-password",
    },
  ];

  return (
    <nav className="flex gap-3 md:justify-center justify-between lg:justify-around border-2 border-gray-400 px-6 py-2 flex-wrap bg-red-500 md:bg-green-400">
      {navbarFields.map(({ name, pathname }) => (
        <Link
          key={name}
          to={pathname}
          className={`${location.pathname === pathname
              ? "font-bold bg-white text-black px-2 py-1 rounded"
              : "text-white"
            }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;