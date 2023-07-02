import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BiTimeFive, BiSolidCity } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { button } from "@material-tailwind/react";

const Card = ({ event, myEvent, onDelete }) => {
  const { title, description, location, city, date, time } = event;

  if (myEvent) {
    myEvent = true;
  } else {
    myEvent = false;
  }

  const cardStyle = () => {
    let initial =
      "flex items-center justify-center text-lg font-semibold tracking-widest capitalize w-60 h-28  rounded-t-lg text-white font-bold ";
    const gradientStyles = [
      "bg-gradient-to-r from-green-400 to-blue-500",
      "bg-gradient-to-r from-cyan-500 to-blue-500",
      "bg-gradient-to-r from-sky-500 to-indigo-500",
      "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      "bg-gradient-to-r from-purple-500 to-pink-500",
    ];

    return (
      initial +
      gradientStyles[Math.floor(Math.random() * gradientStyles.length)]
    );
  };

  return (
    <>
      <div className="w-60 rounded-lg">
        <div className={cardStyle()}>
          <p>{title}</p>
        </div>
        <div className="flex flex-col border-1 border-gray-200 rounded-b-lg pt-2 pb-4 px-2 gap-2">
          <p className=" text-gray-500">{description}</p>
          <div className="flex items-center">
            <CiLocationOn />
            <p className="ml-2">{location}</p>
          </div>
          <div className="flex items-center">
            <BiTimeFive />
            <p className="ml-2">{time}</p>
          </div>
          <div className="flex flex-wrap items-center justify-start">
            <div className="flex flex-wrap items-center">
              <BiSolidCity />
              <p className="ml-2 mr-2">{city}</p>
            </div>
            <div className="flex flex-wrap items-center">
              <BsCalendarDate />
              <p className="ml-2">{date}</p>
            </div>
          </div>
          {myEvent ? (
            <div className="flex flex-col items-center justify-center mt-2 gap-2 ">
              <button className="w-5/6 h-10 font-bold text-white bg-theme-blue rounded">
                Edit
              </button>
              <button
                id={event._id}
                onClick={onDelete}
                className="w-5/6 h-10 font-bold text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
