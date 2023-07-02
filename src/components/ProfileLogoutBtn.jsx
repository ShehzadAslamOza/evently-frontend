import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProfileLogoutBtn = ({ onLogout, dropDown }) => {
  let styleBtn = "";
  let logoutBtn = "w-32 h-10 font-bold text-white bg-red-500 rounded ml-6";
  let createEventBtn =
    "w-32 h-10 font-bold text-white bg-green-500 rounded ml-6";
  let profileBtn = "w-24 h-10 font-bold text-white bg-theme-blue rounded";

  const styles = () => {
    if (!dropDown) {
      styleBtn = "flex flex-col items-center justify-center gap-2 ";
      createEventBtn = "w-32 h-10 font-bold text-white bg-green-500 rounded";
      logoutBtn = "w-32 h-10 font-bold text-white bg-red-500 rounded";
      profileBtn = "w-32 h-10 font-bold text-white bg-theme-blue rounded";
    }
  };

  useEffect(() => {
    styles();
  }, [dropDown]);

  return (
    <div className={styleBtn}>
      <Link to="/profile">
        <button className={profileBtn}>Profile</button>
      </Link>

      <Link to="/createEvent">
        <button className={createEventBtn}>Create Event</button>
      </Link>

      <button onClick={onLogout} className={logoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default ProfileLogoutBtn;
