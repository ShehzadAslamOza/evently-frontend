import axios from "axios";

const API_URL = "https://evently-backend.vercel.app/event";

// Create new event
const createEvent = async (eventData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, eventData, config);

  return response.data;
};

// Get user events
const getEvents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user event
const deleteEvent = async (eventId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(eventId.id);
  const response = await axios.delete(API_URL + "/" + eventId.id, config);

  return response.data;
};

// Delete user event
const updateEvent = async (eventData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // console.log(eventId.id);
  const response = await axios.put(
    API_URL + "/" + eventData.id,
    eventData,
    config
  );

  return response.data;
};

const eventService = {
  createEvent,
  getEvents,
  deleteEvent,
  updateEvent,
};

export default eventService;
