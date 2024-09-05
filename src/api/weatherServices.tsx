import axios from "axios";
import { apiKey } from "../constants";
import weather from "../../assets/data/weather.json";

const forecastEndpoint = (cityName: string, day: number) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${day}&aqi=no&alerts=no`;
const locationEndPoint = (cityName: string) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${cityName}`;

interface FetchWeatherParams {
  cityName: string;
  day: number;
}
export const fetchWeatherForecast = async (
  { cityName, day }: FetchWeatherParams
): Promise<Weather | null> => {
  // const options = {
  //   method: "get",
  //   url: forecastEndpoint(cityName, day),
  // };
  // console.log(options);
  // try {
  //   const response = await axios.request(options);
  //   console.log('weather', response.data);
  //   return response.data as Weather;
  // } catch (error) {
  //   console.log(error);
  //   return null;
  // }
  return weather;
};

export const getLocations = async (cityName: string): Promise<LocationSearch[] | []> => {
  const options = {
    method: "get",
    url: locationEndPoint(cityName),
  };

  try {
    const response = await axios.request(options);
    return response.data as LocationSearch[];
  } catch (error) {
    return [];
  }
};
