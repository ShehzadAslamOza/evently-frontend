import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ closeMenu, user }) => {
  return (
    <>
      {user ? (
        <div className="block w-full">
          <div
            onClick={closeMenu}
            className="block w-full text-xl py-3 px-4 border-b-2 border-gray-200"
          >
            <Link to="/events">Events</Link>
          </div>
          <div className="block w-full text-xl py-3 px-4 border-b-2 border-gray-200">
            <Link to="/myEvents">My Events</Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DropDown;
