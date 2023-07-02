import React from "react";
import { Link } from "react-router-dom";

const LoginRegisterBtn = () => {
  return (
    <div>
      <Link to="/login">
        <button className="w-24 h-10 font-bold text-white bg-theme-blue rounded">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button className="w-24 h-10 font-bold text-white bg-theme-blue rounded ml-6">
          Register
        </button>
      </Link>
    </div>
  );
};

export default LoginRegisterBtn;
