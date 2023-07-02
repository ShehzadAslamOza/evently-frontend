import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Profile = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    <Spinner />;
  }
  return (
    <div className="flex flex-col mx-auto items-center justify-center max-w-xl h-screen pb-60">
      <div className="flex flex-col border-1 drop-shadow-lg rounded items-center gap-3 pb-14 pt-8 px-10 ">
        <h1 className="font-bold text-2xl">Profile</h1>
        <div className="flex items-center mt-2">
          <label className="w-24">First Name: </label>
          <input
            className="rounded  bg-gray-100 ml-5"
            type="text"
            value={user.firstName}
            disabled
          />
        </div>
        <div className="flex items-center mt-2">
          <label className="w-24">Last Name: </label>
          <input
            className="rounded  bg-gray-100 ml-5"
            type="text"
            value={user.lastName}
            disabled
          />
        </div>
        <div className="flex items-center mt-2">
          <label className="w-24">Email: </label>
          <input
            className="rounded bg-gray-100 ml-5"
            type="email"
            value={user.email}
            disabled
          />
        </div>
        <Link className="w-full" to="/resetPassword">
          <button className="w-full bg-theme-blue text-white h-12 rounded font-bold mt-4">
            RESET PASSWORD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
