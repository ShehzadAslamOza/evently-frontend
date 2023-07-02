import axios from "axios";

const API_URL = "https://evently-backend.vercel.app/auth";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "/register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// resend confirmation code
const resend = async (userData) => {
  const response = await axios.post(API_URL + "/confirm/resend", userData);

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// reset Password user
const resetPassword = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    API_URL + "/resetPassword",
    userData,
    config
  );

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
  resend,
  resetPassword,
};

export default authService;
