import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.day}&aqi=no&alerts=no`;
const locationEndPoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
    const options = {
        method: 'get',
        url: endpoint,
    }
    console.log(endpoint);

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(forecastEndpoint(params));
}

export const fetchLocation = params => {
    return apiCall(locationEndPoint(params));
}