import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProfileLogoutBtn2 = ({ onLogout, dropDown }) => {
  const styleBtn = "flex flex-col items-center justify-center gap-2 ";
  const createEventBtn = "w-32 h-10 font-bold text-white bg-green-500 rounded";
  const logoutBtn = "w-32 h-10 font-bold text-white bg-red-500 rounded";
  const profileBtn = "w-32 h-10 font-bold text-white bg-theme-blue rounded";

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

export default ProfileLogoutBtn2;
