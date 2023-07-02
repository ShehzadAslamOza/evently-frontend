import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Card from "../components/Card";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  const event = {
    _id: "64a1cc73d5343c30027a6fc4",
    user: "64947f15f253b5b433252fa6",
    title: "Karachi Eat",
    description: "Place where people from all over Karachi come and eat",
    location: "Benazir Bhutto Park",
    city: "Karachi",
    date: "2023-08-03",
    time: "20:00",
    createdAt: "2023-07-02T19:13:55.191Z",
    updatedAt: "2023-07-02T20:00:48.301Z",
    __v: 0,
  };

  return (
    <div>
      <div className="bg-hero-image bg-right w-screen h-screen ">
        <div className="flex flex-col items-center text-center justify-center ">
          <div className="h-52 py-32 md:scale-150">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Look for Events around your Vicinity",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Create Events Anytime",
                1000,
                "Create Events from Anywhere",
                1000,
                "Create Memories",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                color: "white",
                brightness: "100%",
                fontWeight: "600",
                fontSize: "2.5em",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </div>
          <p className="text-white text-lg w-11/12 pt-20 md:w-1/2 md:text-2xl">
            Discover, Create, and Connect: Unleash your event planning prowess
            with our seamless platform for browsing and creating unforgettable
            experiences.
          </p>

          <Link to="/login">
            <button className="w-28 h-12 font-bold text-white bg-theme-blue rounded mt-5">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Discover Events */}
      <div className="flex flex-wrap items-center justify-around mt-10 w-max-md gap-4 md:justify-center">
        <div className="font-bold text-4xl md:text-5xl md:mr-20 md:pr-20 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Discover Events
        </div>
        <div className="md:scale-150">
          <Card event={event} />
        </div>
      </div>
      <div className="flex flex-row-reverse flex-wrap items-center justify-around mt-10 w-max-md gap-4 md:mt-28 md:justify-center">
        <div className="font-bold text-4xl md:text-5xl md:ml-20 md:pl-20 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Explore Cities
        </div>
        <div className="scale-150 mt-2 md:mr-10">
          <div className="flex flex-col">
            <button
              className="w-44 h-10 font-semibold border-1 rounded-3xl mt-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              disabled
            >
              Islamabad
            </button>
            <button
              className="w-44 h-10 border-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-2"
              disabled
            >
              Karachi
            </button>
            <button
              className="w-44 h-10 font-semibold border-1 rounded-3xl mt-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              disabled
            >
              Lahore
            </button>
            <button
              className="w-44 h-10 font-semibold border-1 rounded-3xl mt-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              disabled
            >
              Peshawar
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center text-center text-lg pb-14 pt-24">
        Muhammad Shehzad{" "}
        <a
          className="hover:rotate-12 hover:scale-150"
          href="https://github.com/ShehzadAslamOza"
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default Home;
