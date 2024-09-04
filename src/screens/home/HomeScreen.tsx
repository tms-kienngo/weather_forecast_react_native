import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../store/weatherSlice';
import { AppDispatch, RootState } from '../../store';
import { globalStyles } from '../../styles';
import AssetsImage from '../../../assets/Images';
import * as Progress from "react-native-progress";
import { SafeAreaView } from 'react-native-safe-area-context';
import ForecastComponents from './components/forecast_component/ForecastComponent';
import ForecastNextDay from './components/forecast_next_day/ForecastNextDay';
import { getCityName } from '../../utils/ansynStorage';
import SearchComponent from './components/search_component/SearchComponent';

const HomeScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const { weather, loading, error } = useSelector((state: RootState) => state.weather);
  const [city, setCity] = useState<string>('Hanoi');

  const loadCityName = async () => {
    const storedCityName = await getCityName();
    if (storedCityName) {
      setCity(storedCityName);
      dispatch(fetchWeather({ cityName: storedCityName, day: 7 }));
    } else {
      dispatch(fetchWeather({ cityName: city, day: 7 }));
    }
  };
  useEffect(() => {
    loadCityName();
  }, [dispatch]);


  const forecastProps = {
    city: weather?.location?.name,
    country: weather?.location?.country,
    image: { uri: `https:${weather?.current.condition.icon}` } as ImageSourcePropType,
    tempc: weather?.current.temp_c,
    description: weather?.current.condition.text,
    wind: weather?.current.wind_kph,
    humidity: weather?.current.humidity,
    time: weather?.location.localtime,

  }
  const forecastNextDayProps = {
    forecastDays: weather?.forecast?.forecastday ?? [],
    wind_dir: weather?.current?.wind_kph ?? 0

  }
  return (
    <View style={globalStyles.container}>
      <Image
        blurRadius={70}
        source={AssetsImage.imgBackground}
        style={globalStyles.imageBackground}
      />
      {loading ? (
        <View style={globalStyles.containerLoading}>
          <Progress.CircleSnail thickness={2} size={40} />
        </View>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <SafeAreaView style={globalStyles.container}>
          <SearchComponent />
          <ForecastComponents {...forecastProps} />
          <ForecastNextDay {...forecastNextDayProps} />
        </SafeAreaView>
      )}

    </View>
  );
};

export default HomeScreen;
