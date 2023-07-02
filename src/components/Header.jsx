import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import Menu from "./Menu";
import LoginRegisterBtn from "./LoginRegisterBtn";
import { useSelector, useDispatch } from "react-redux";
import ProfileLogoutBtn from "./ProfileLogoutBtn";
import { logout, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    toast.success("Successfully Logged Out");
    dispatch(logout());
    dispatch(reset());
    navigate("/events");
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {}, [isOpen]);

  return (
    <>
      <div className="border-b-2 border-gray-200 md:py-4">
        <div className="container flex items-center justify-between h-14 xl:px-10">
          {/* left side */}

          <div className="flex items-center gap-10">
            <Link to="/">
              <div onClick={closeMenu}>
                <p className="text-2xl font-bold tracking-wide">Evently.</p>
              </div>
            </Link>
            {user ? (
              <div>
                <ul className="hidden gap-3 text-lg md:flex">
                  <Link to="/events">
                    <li>Events</li>
                  </Link>
                  <Link to="/myEvents">
                    <li>My Events</li>
                  </Link>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* buttons*/}
          <div className="hidden md:block">
            {user ? (
              <ProfileLogoutBtn onLogout={onLogout} dropDown={false} />
            ) : (
              <LoginRegisterBtn />
            )}
          </div>
          {/* hamburger */}
          <div className="md:hidden">
            <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>

      <Menu isOpen={isOpen} closeMenu={closeMenu} user={user} />
    </>
  );
};

export default Header;
