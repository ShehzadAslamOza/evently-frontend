import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Check your email for confirmation email");
      navigate("/verify");
    }

    if (user) {
      if (user?.status === "Pending") {
        navigate("/verify");
      } else {
        navigate("/");
      }
    }

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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="flex flex-col container items-center justify-center max-w-md h-screen pb-52">
      <h2 className="text-3xl text-theme-blue font-semibold mt-2 mb-3">
        Register your account
      </h2>
      <h3 className="text-lg mb-3">
        Already have an account?{" "}
        <a className="text-theme-blue font-bold" href="/login">
          Login
        </a>
      </h3>
      <form onSubmit={onSubmit} className="flex flex-col w-full">
        <div className="flex gap-2 w-full mb-2">
          <div className="flex flex-col">
            <label className="text-sm mb-1 font-bold">First Name</label>
            <input
              id="firstName"
              name="firstName"
              onChange={onChange}
              value={firstName}
              className="rounded w-full"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 font-bold">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              onChange={onChange}
              value={lastName}
              className="rounded w-full"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <label className="text-sm mb-1 font-bold">Email</label>
        <input
          id="email"
          name="email"
          onChange={onChange}
          value={email}
          className="rounded"
          type="email"
          placeholder="Email"
          required
        />
        <label className="mt-3 text-sm font-bold">Password</label>
        <input
          id="password"
          name="password"
          onChange={onChange}
          value={password}
          className="rounded"
          type="password"
          placeholder="Password"
          required
        />
        <label className="mt-3 text-sm font-bold">Confirm Password</label>
        <input
          id="password2"
          name="password2"
          onChange={onChange}
          value={password2}
          className="rounded"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button
          className="w-full h-10 text-white bg-theme-blue rounded mt-4"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
