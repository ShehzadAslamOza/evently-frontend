import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, resetPassword } from "../features/auth/authSlice";

import Spinner from "../components/Spinner";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    newPassword2: "",
  });

  const { currentPassword, newPassword, newPassword2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      console.error(message);
    }

    if (isSuccess) {
      toast.success("Password Successfully Changed");
      setFormData({
        currentPassword: "",
        newPassword: "",
        newPassword2: "",
      });
    }

    if (!user) {
      navigate("/login");
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

    if (newPassword !== newPassword2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        currentPassword,
        newPassword,
      };

      dispatch(resetPassword(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex flex-col mx-auto items-center justify-center max-w-xl h-screen pb-60">
        <div className="flex flex-col border-1 drop-shadow-lg rounded items-center gap-3 pb-14 pt-8 px-10 ">
          <h1 className="font-bold text-2xl">Reset Password</h1>

          <div className="flex items-center mt-2">
            <label className="w-24">Current Password: </label>
            <input
              onChange={onChange}
              id="currentPassword"
              name="currentPassword"
              className="rounded bg-gray-100 ml-5"
              type="password"
              value={currentPassword}
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-24">New Password: </label>
            <input
              onChange={onChange}
              id="newPassword"
              name="newPassword"
              className="rounded bg-gray-100 ml-5"
              type="password"
              value={newPassword}
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-24">Confirm Password: </label>
            <input
              onChange={onChange}
              id="newPassword2"
              name="newPassword2"
              className="rounded bg-gray-100 ml-5"
              type="password"
              value={newPassword2}
            />
          </div>

          <button
            onClick={onSubmit}
            className="w-full bg-theme-blue text-white h-12 rounded font-bold mt-4"
          >
            RESET PASSWORD
          </button>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
