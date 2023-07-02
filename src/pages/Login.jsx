import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { logout } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const visitedVerified = JSON.parse(localStorage.getItem("verified"));

    if (isError) {
      toast.error(message);
      console.error(message);
    }

    if (isSuccess || user) {
      if (user.status === "Pending") {
        if (visitedVerified !== "true") {
          toast.warning("Email Not Verified");
          navigate("/verify");
        } else {
          dispatch(logout());
          dispatch(reset());
        }
      } else if (user.status === "Active") {
        toast.success("Successfully loggedin");
        navigate("/events");
      }
    }

    // if (isSuccess || user) {
    //   navigate("/events");
    // }
    localStorage.setItem("verified", JSON.stringify("false"));
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="flex flex-col container items-center justify-center max-w-md h-screen pb-60">
      <h2 className="text-3xl text-theme-blue font-semibold mt-2 mb-3">
        Login in to your account
      </h2>
      <h3 className="text-lg mb-3">
        Don't have an account?{" "}
        <a className="text-theme-blue font-bold" href="/register">
          Register
        </a>
      </h3>
      <form onSubmit={onSubmit} className="flex flex-col w-full">
        <label className="text-sm mb-1 font-bold">Email</label>
        <input
          onChange={onChange}
          id="email"
          name="email"
          className="rounded"
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <label className="mt-3 text-sm font-bold">Password</label>
        <input
          onChange={onChange}
          id="password"
          name="password"
          value={password}
          className="rounded"
          type="password"
          placeholder="Password"
          required
        />
        <button
          className="w-full h-10 text-white bg-theme-blue rounded mt-4"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
