interface Weather {
  location: Location;
  current: Current;
  forecast: {
    forecastday: ForecastDay[];
  };
}
