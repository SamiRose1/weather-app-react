"use client";

import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "./Weather";
import Spinner from "./Spinner";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    main: {
      temp: 0,
    },
    weather: "empty",
  });
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0046a2eebe8d73b39c87773e09a88c0`;

  ////////////////

  ////////////////

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
        setCity("");
      })
      .catch((err) => {
        alert(`${err.response.data.message}`);
        window.location.reload(true);
      });
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="sm:w-[100%] lg:w-[100%] md:w-[100%] ">
        <title>Weather App</title>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-pink-200 to-indigo-200"></div>
        <div className="relative flex justify-between items-center max-w-[500px] w-full mr-auto pt-4 text-white z-10">
          <form
            className="flex justify-between  items-center w-full m-auto p-3 bg-transparent border border-gray-500 text-black rounded-2xl "
            onSubmit={fetch}
          >
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              type="text"
              placeholder="Search city..."
              className="bg-transparent text-black  focus:outline-none lg:text-2xl lg:w-full  md:text-3xl sm:text-xl md:w-[40%] sm:max-w-[30%]  rounded-xl"
            />

            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {weather?.main && <Weather data={weather} />}
      </div>
    );
  }
};

export default Home;
