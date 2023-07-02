import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../components/AnimatedProgressProvider";
import { easeLinear } from "d3-ease";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { logout, resend, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Verify = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const email = user?.email;

  useEffect(() => {
    localStorage.setItem("verified", JSON.stringify("true"));

    if (isError) {
      toast.error("message");
      dispatch(logout());
      dispatch(reset());
      navigate("/login");
    }

    if (!user) {
      navigate("/login");
    }

    if (user && user?.status === "Active") {
      navigate("/login");
    }

    if (isSuccess) {
      toast.success("Confirmation code reset on your mail. Please recheck");
    }

    dispatch(reset());
  }, [buttonDisabled, user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    setButtonDisabled(true);

    setTimeout(() => setButtonDisabled(false), 30000);

    const userData = { email };

    dispatch(resend(userData));
  };

  const buttonStyle = () => {
    if (buttonDisabled) {
      return "w-full bg-gray-400 text-white h-14 rounded font-bold mt-2";
    } else {
      return "w-full bg-theme-blue text-white h-14 rounded font-bold mt-2";
    }
  };

  const pageStyle = () => {
    if (buttonDisabled) {
      return "flex flex-col mx-auto items-center justify-center max-w-xl h-screen pb-32";
    } else {
      return "flex flex-col mx-auto items-center justify-center max-w-xl h-screen pb-60";
    }
  };

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className={pageStyle()}>
      <div className="flex flex-col border-1 drop-shadow-lg rounded items-center gap-3 py-14 px-10 ">
        <h1 className="text-2xl font-semibold text-center">
          Verify Your Email Address
        </h1>
        <p className="text-lg font-medium text-center">
          To continue using Evently, please verify your email address.{" "}
          <span className="font-bold">Check Span</span>
        </p>
        <p className="italic">{user.email}</p>
        {buttonDisabled ? (
          <div
            className="timer"
            style={{ width: 200, height: 200, margin: "auto" }}
          >
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={30}
              easingFunction={easeLinear}
            >
              {(value) => {
                const roundedValue = Math.round((value * 30) / 100);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${30 - roundedValue}s`}
                    /* This is important to include, because if you're fully managing the
            animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({ pathTransition: "none" })}
                  />
                );
              }}
            </AnimatedProgressProvider>
          </div>
        ) : (
          <></>
        )}
        <button
          onClick={onSubmit}
          className={buttonStyle()}
          disabled={buttonDisabled}
        >
          SEND VERIFICATION EMAIL
        </button>
      </div>
    </div>
  );
};

export default Verify;
