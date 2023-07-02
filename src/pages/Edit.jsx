import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset } from "../features/auth/authSlice";
import { reset2 } from "../features/event/eventSlice";
import { updateEvent } from "../features/event/eventSlice";
import Spinner from "../components/Spinner";

function Edit() {
  const event = JSON.parse(localStorage.getItem("edit"));

  const [formData, setFormData] = useState({
    title: event.title,
    description: event.description,
    location: event.location,
    city: event.city,
    date: event.date,
    time: event.time,
  });

  const { title, description, location, city, date, time } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { events, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.event
  );

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Event Successfully Updated");
      navigate("/myEvents");
    }

    if (!user) {
      navigate("/login");
    }

    if (!event) {
      navigate("/myEvents");
    }

    dispatch(reset());
    dispatch(reset2());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      id: event._id,
      title,
      description,
      location,
      city,
      date,
      time,
    };

    dispatch(updateEvent(eventData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex flex-col mx-auto items-center justify-center max-w-xl h-screen pb-20">
        <div className="flex flex-col border-1 drop-shadow-lg rounded items-center gap-3 pb-14 pt-8 px-10 ">
          <h1 className="font-bold text-2xl">Edit Event</h1>

          <div className="flex items-center mt-2">
            <label className="w-24">Title </label>
            <input
              onChange={onChange}
              id="title"
              name="title"
              className="rounded w-4/6 bg-gray-100 ml-5"
              type="text"
              value={title}
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-24">Description </label>
            <input
              onChange={onChange}
              id="description"
              name="description"
              className="rounded w-4/6 bg-gray-100 ml-5"
              type="text"
              value={description}
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-24">Location </label>
            <input
              onChange={onChange}
              id="location"
              name="location"
              className="rounded w-4/6 bg-gray-100 ml-5"
              type="text"
              value={location}
            />
          </div>
          <div className="flex w-full items-center mt-2">
            <label className="w-24" for="city">
              City:
            </label>

            <select
              className="rounded w-4/6 bg-gray-100 ml-5"
              name="city"
              id="city"
              onChange={onChange}
            >
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Peshawar">Peshawar</option>
            </select>
          </div>
          <div className="flex w-full items-center mt-2">
            <label className="w-24" for="date">
              Date
            </label>
            <input
              className="rounded w-4/6 bg-gray-100 ml-5"
              type="date"
              id="date"
              onChange={onChange}
              name="date"
            />
          </div>
          <div className="flex w-full items-center mt-2">
            <label className="w-24" for="time">
              Time
            </label>
            <input
              className="rounded w-4/6 bg-gray-100 ml-5"
              type="time"
              id="time"
              onChange={onChange}
              name="time"
            />
          </div>
          <button
            onClick={onSubmit}
            className="w-full bg-theme-blue text-white h-12 rounded font-bold mt-4"
          >
            Edit Event
          </button>
        </div>
      </div>
    </>
  );
}

export default Edit;
