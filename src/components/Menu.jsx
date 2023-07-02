import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import LoginRegisterBtn from "./LoginRegisterBtn";
import DropDown from "./DropDown";

import ProfileLogoutBtn2 from "./ProfileLogoutBtn2";

const Menu = ({ isOpen, closeMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      {isOpen ? (
        <div
          onClick={closeMenu}
          className="flex flex-col items-center w-full h-screen justify-between md:hidden"
        >
          <DropDown closeMenu={closeMenu} user={user} />
          <div className="block w-full text-center text-lg p-3 mb-36">
            {user ? (
              <ProfileLogoutBtn2 onLogout={onLogout} />
            ) : (
              <LoginRegisterBtn dropDown={true} />
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Menu;
