import React, { useState, useEffect, useCallback } from "react";
import { View, Image, SafeAreaView } from "react-native";
import * as Progress from "react-native-progress";
import SearchComponents from "./components/search_component/SearchComponent";
import ForecastComponents from "./components/forecast_component/ForecastComponent";
import ForecastNextDay from "./components/forecast_next_day/ForecastNextDay";
import { fetchLocation, fetchWeatherForecast } from "../../api/weather";
import { debounce } from "lodash";
import { weatherImages } from "../../constants";
import { getData, storeData } from "../../utils/ansynStorage";
import { useNavigation } from "@react-navigation/native";
import AssetsImage from "../../../assets/Images";
import styles from "./style";

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState<LocationSearch[] | []>([]);
  const [weather, setWeather] = useState<Weather | null>(null);
  const handleLocation = (loc: LocationSearch) => {
    toggleSearch(false);
    setLoading(true);
    setLocations([]);
    console.log('SELECTED LOCATION', loc);
    fetchWeatherForecast(loc.name, 7).then((data) => {
      setWeather(data);
      setLoading(false);
      storeData("city", loc.name);
    });
  };
  const handleSearch = (value: string) => {
    if (value.length > 2) {
      fetchLocation(value).then((data) => {
        if (data != null) {
          setLocations(data);
          console.log('LOCATIONS', data);
        }
      });
    }
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    let myCity = await getData("city");
    let cityName = "Ha Noi";
    if (myCity) cityName = myCity;
    fetchWeatherForecast(cityName, 7).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  const handelTextDebounce = useCallback(debounce(handleSearch, 1200), []);
  const { current, location } = weather ? weather : {};
  return (
    <View style={styles.container}>
      <Image
        blurRadius={70}
        source={AssetsImage.imgBackground}
        style={styles.imageBackground}
      />
      {loading ? (
        <View style={styles.containerLoading}>
          <Progress.CircleSnail thickness={2} size={40} />
        </View>
      ) : (
        <SafeAreaView style={styles.containerSafeArea}>
          <SearchComponents
            isShow={showSearch}
            handleTextDebounce={handelTextDebounce}
            searchAction={() => toggleSearch(!showSearch)}
            locations={locations}
            onLocationSelect={handleLocation}
          />

          <ForecastComponents
            city={location?.name}
            country={location?.country}
            image={weatherImages[current?.condition?.text ?? ""]}
            tempc={current?.temp_c}
            description={current?.condition?.text}
            wind={current?.wind_kph}
            humidity={current?.humidity}
            time={location?.localtime}
          />

          <ForecastNextDay
            forecastDays={weather?.forecast?.forecastday ?? []}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

export default HomeScreen;
