"use client";
const Weather = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4  text-gray-50 lg:max-w-[50%] md:max-w-[70%] sm:max-w-[80%]  ">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <img
            alt="icon"
            src={`http://openweathermap.org/img/wn/${
              data.weather[0].icon ? data?.weather[0]?.icon : "Icon"
            }.png`}
            width={"100"}
            height={"100"}
          />
          <p className="text-2xl text-black/70">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl text-black/70 ">{data.main?.temp.toFixed(0)}°</p>
      </div>
      <div className="bg-black/30 relative p-8 rounded-lg shadow-2xl  text-black">
        <p className="lg:text-3xl md:text-3xl sm:text-3xl text-2xl text-center pb-6 text-slate-700">
          Weather in {data.name}
        </p>
        <div className="flex justify-between text-center ">
          <div>
            <p className="font-bold text-2xl">
              {data.main?.feels_like?.toFixed(0)}°
            </p>
            <p className="font-bold text-1xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main?.humidity}%</p>
            <p className="font-bold text-1xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.wind?.speed} MPH</p>
            <p className="font-bold text-1xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
