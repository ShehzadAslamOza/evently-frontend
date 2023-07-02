import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Verify from "./pages/Verify";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";
import CreateEvent from "./pages/CreateEvent";
import MyEvents from "./pages/MyEvents";

// import Edit from "./pages/Edit"

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/createEvent" element={<CreateEvent />} />
            <Route path="/myEvents" element={<MyEvents />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
