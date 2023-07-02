import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { reset2 } from "../features/event/eventSlice";
import { getEvents } from "../features/event/eventSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { events, isLoading, isError, message } = useSelector(
    (state) => state.event
  );

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user || user?.status === "Pending") {
      navigate("/login");
    }

    dispatch(getEvents());

    dispatch(reset2());
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-center mt-10 font-bold text-2xl">Events</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        {events.map((event) => (
          <Card event={event} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
