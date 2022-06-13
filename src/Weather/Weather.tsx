import { Grid } from "@mui/material";
import React, { useState } from "react";
import useSWR from "swr";
import SearchBar from "../SearchBar";
import TextFormat from "../TextFormat";
import Clouds from "./Clouds";
import Coordinates from "./Coordinates";
import MainWeather from "./MainWeather";
import Sys from "./Sys";
import WeatherDescription from "./WeatherDescription";
import Wind from "./Wind";

const apiKey = "4b43c4043d158edb52a7d1e45276c185";
const weatherTemplate = {
  base: "",
  clouds: { all: 0 },
  cod: 0,
  coord: { lat: 0, lon: 0 },
  dt: 0,
  id: 0,
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: "",
  sys: { country: "US", id: 0, sunrise: 0, sunset: 0, type: 0 },
  timezone: 0,
  visibility: 0,
  weather: [
    { description: "broken clouds", icon: "04d", id: 803, main: "Clouds" },
  ],
  wind: { deg: 0, speed: 0 },
};

const Weather = () => {
  const [location, setLocation] = useState("Florida");
  const { data: results } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`
  );
  const {
    base,
    clouds,
    cod,
    coord,
    dt,
    id,
    main,
    name,
    sys,
    timezone,
    visibility,
    weather,
    wind,
  } = results;

  const searchBarValues = {
    setSearchValue: setLocation,
    borderColor: "white",
    inputColor: "white",
    labelColor: "white",
    focusedBorderColor: "white",
    focusedInputColor: "white",
    textValue: "Search Location",
  };
  //console.log(data);
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100vh",
        background:
          "url(https://someboldadventure.com/wp-content/uploads/2020/05/zoom-isle-royale-sunset-moskey.jpg)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <TextFormat>
        Base: {base}
        cod: {cod}
        dt: {dt}
        id: {id}
        Name: {name}
        Timezone: {timezone}
        Visibility: {visibility}
      </TextFormat>

      <MainWeather {...main} />
      <WeatherDescription weather={weather} />
      <Sys {...sys} />
      <Coordinates {...coord} />
      <Clouds {...clouds} />
      <Wind {...wind} />
      <SearchBar {...searchBarValues} />
    </Grid>
  );
};

export default Weather;
