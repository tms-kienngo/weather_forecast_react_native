import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = (cityName: string, day: number) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${day}&aqi=no&alerts=no`;
const locationEndPoint = (cityName: string) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${cityName}`;

export const fetchWeatherForecast = async (
  cityName: string,
  day: number
): Promise<Weather | null> => {
  const options = {
    method: "get",
    url: forecastEndpoint(cityName, day),
  };
  console.log(options);
  try {
    const response = await axios.request(options);
    console.log('weather', response.data);
    return response.data as Weather;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchLocation = async (cityName: string): Promise<LocationSearch[] | []> => {
  const options = {
    method: "get",
    url: locationEndPoint(cityName),
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data as LocationSearch[];
  } catch (error) {
    return [];
  }
};
