import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { reset2, deleteEvent } from "../features/event/eventSlice";
import { getEvents } from "../features/event/eventSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const MyEvents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const btnStyleHover =
    "w-28 h-10 border-1 rounded-3xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white";
  const btnStyleActive =
    "w-28 h-10 border-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white";

  const [currentCity, setCurrentCity] = useState("All");

  const city_list = ["All", "Karachi", "Lahore", "Islamabad", "Peshawar"];

  const { events, isLoading, isError, message } = useSelector(
    (state) => state.event
  );

  const onCitySelection = (e) => {
    setCurrentCity(e.target.textContent);
    // e.target.setAttribute("className", btnStyleActive);
  };

  const btnStyle = (btnCity) => {
    if (btnCity === currentCity) {
      return btnStyleActive;
    } else {
      return btnStyleHover;
    }
  };

  const { user } = useSelector((state) => state.auth);

  const onEdit = (e) => {
    localStorage.setItem("edit", e.target.getAttribute("event"));

    navigate("/edit");
  };

  const onDelete = (e) => {
    e.preventDefault();

    const userData = {
      id: e.target.id,
    };

    dispatch(deleteEvent(userData));
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user || user?.status === "Pending") {
      navigate("/login");
    }

    dispatch(getEvents());

    dispatch(reset2());
  }, [user, navigate, isError, message, dispatch, currentCity]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-center mt-10 font-bold text-2xl">My Events</h1>
      <div className="flex flex-wrap items-center justify-center my-3 gap-2 px-2">
        {city_list.map((city) => (
          <button className={btnStyle(city)} onClick={onCitySelection}>
            {city}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        {events.map((event) => {
          if (event.user.toString() === user._id) {
            if (currentCity === "All") {
              return (
                <Card
                  event={event}
                  myEvent={true}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              );
            } else if (currentCity === event.city) {
              return <Card event={event} />;
            }
          }
        })}
      </div>
    </div>
  );
};

export default MyEvents;
