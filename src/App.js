import "./App.css";
import Header from "./Header/Header";
import axios from "./axios";
import { useEffect, useState } from "react";

function App() {
  const API = "230868182f264be192650229221401";
  const [weatherData, setWeatherData] = useState([]);
  const [weatherLocation, setWeatherLocation] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);

  let variable = "forecast";

  // useEffect(() => {
  //   axios
  //     .get(`${variable}.json?key=${API}&q=Delhi&days=1&aqi=no&alerts=no`)
  //     .then((response) => {
  //       setWeatherData(response?.data?.current);
  //       setWeatherLocation(response?.data?.location);
  //       setWeatherForecast(response?.data?.forecast);
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  console.log(weatherForecast);

  // const forecast = weatherForecast?.forecastday.map((item) => item.astro);
  // const moon = forecast.map((item) => item.sunrise);
  return (
    <div className="App">
      <Header />
      {/* <h2>{weatherLocation.country}</h2>
      <h4>{weatherLocation.name}</h4>
      <h4>{weatherLocation.localtime}</h4>
      <h4>{weatherLocation.tz_id}</h4>
      <h4>{weatherData.temp_c}deg C</h4>
      <h4>{weatherData.temp_f}deg F</h4> */}
      {/* <div className="image" style={{ display: "flex", alignItems: "center" }}>
        <img src={weatherData?.condition.icon} alt="logo" />
        <h6>{weatherData?.condition.text}</h6>
      </div> */}
      {/* <div className="astro">{moon}</div> */}
    </div>
  );
}

export default App;
