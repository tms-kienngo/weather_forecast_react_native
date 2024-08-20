import { useCallback, useEffect, useState } from "react";
import { View, Image, SafeAreaView, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";
import { CalendarDaysIcon, MagnifyingGlassPlusIcon } from 'react-native-heroicons/outline';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { debounce } from 'lodash';
import { fetchLocation, fetchWeatherForecast } from "./src/api/weather";
import { weatherImages } from "./src/constants";
import * as Progress from 'react-native-progress';
import { getData, storeData } from "./src/utils/ansynStorage";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});

  const handleLocation = (loc) => {
    toggleSearch(false);
    setLoading(true);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      day: 7,
    }).then(data => {
      setWeather(data);
      setLoading(false);
      storeData.storeData('city', loc.name);
    });
  }
  const handleSearch = value => {

    if (value.length > 2) {
      fetchLocation({ cityName: value }).then(data => {
        setLocations(data);
      }
      )
    }
  }
  useEffect(() => {
    fetchMyWeatherData();
  }, []);
  const fetchMyWeatherData = async () => {
    let myCity = await getData('city');
    let cityName = 'Ha Noi';
    if (myCity) cityName = myCity;
    fetchWeatherForecast({
      cityName,
      day: '7',
    }).then(data => {
      setWeather(data);
      setLoading(false);
    });
  }
  const handelTextDebounce = useCallback(debounce(handleSearch, 1200), []);
  const { current, location } = weather;
  return (
    <View className="flex-1 bg-gray-900">
      <Image blurRadius={70} source={require('./assets/images/bg.png')}
        className="absolute w-full h-full object-cover"
      />
      {/* loading ? (
      <View className="flex-1 flex-row justify-center items-center">
        <Progress.CircleSnail thickness={10} size={40} color="0bb3b2" />
      </View>
      ): () */}
      <SafeAreaView className="flex flex-1">
        <View style={{ height: '7%' }} className="mx-4 relative z-50">
          <View className="flex-row justify-end items-center rounded-full"
            style={{ backgroundColor: showSearch ? 'rgba(255,255,255, 0.2)' : '' }}>
            {
              showSearch ? (
                <TextInput
                  onChangeText={handelTextDebounce}
                  placeholder="Search city"
                  placeholderTextColor={'lightgray'}
                  className="pl-6 h-10 flex-1 text-bast text-white"
                />
              ) : null
            }

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{ backgroundColor: 'rgba(255,255,255, 0.3)' }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassPlusIcon size={25} color='white' />
            </TouchableOpacity>
          </View>
          {
            locations.length > 0 && showSearch ? (
              <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">

                {
                  locations.map((loc, index) => {
                    let showBorder = index + 1 != locations.length;
                    let borderClass = showBorder ? 'border-b-2 border-b-gray-400' : '';
                    return (
                      <TouchableOpacity
                        onPress={() => handleLocation(loc)}
                        key={index}
                        className={"flex-row items-center border-0 p-3 px-4 mb-1" + borderClass}
                      >
                        <MapPinIcon size={20} color="grey" />
                        <Text className="text-black text-lg ml-2">{loc?.name}, {loc?.country}</Text>
                      </TouchableOpacity>
                    );
                  })
                }
              </View>
            ) : null
          }
        </View>
        {/**Forecast section */}
        <View className="mx-4 flex justify-around flex-1 mb-2">
          {/**Location */}
          <Text className="text-white text-center text-2xl font-bold">
            {location?.name},
            <Text className="text-lg font-semibold text-gray-300">{location?.country}</Text>
          </Text>
          {/** Weather image */}
          <View className="flex-row justify-center">
            <Image
              source={weatherImages[current?.condition?.text]}
              className="w-52 h-52"
            />
          </View>
          {/** Degree celcius */}
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              {current?.temp_c}&#176;
            </Text>
            <Text className="text-center text-white text-xl tracking-widset">
              {current?.condition?.text}
            </Text>
          </View>
          {/**Other stats */}
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image source={require('./assets/icons/wind.png')} className="w-6 h-6" />
              <Text className="text-white font-semibold text-base">
                {current?.wind_kph}km
              </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image source={require('./assets/icons/drop.png')} className="w-6 h-6" />
              <Text className="text-white font-semibold text-base">
                {current?.humidity}%
              </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image source={require('./assets/icons/sun.png')} className="w-6 h-6" />
              <Text className="text-white font-semibold text-base">
                6:05AM
              </Text>
            </View>
          </View>
        </View>
        {/** Forecast the next day */}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size={22} color="white" />
            <Text className="text-white text-base">Daily forecast</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            {
              weather?.forecast?.forecastday?.map((item, index) => {
                let date = new Date(item.date);
                let options = { weekday: 'long' };
                let dayName = date.toLocaleDateString('en-US', options);
                dayName = dayName.split(',')[0];

                return (
                  <View
                    key={index}
                    className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                    style={{ backgroundColor: 'rgba(255,255,255, 0.15)' }}
                  >
                    <Image
                      source={weatherImages[item?.day?.condition?.text]}
                      className="h-11 w-11"
                    />
                    <Text className="text-white">{dayName}</Text>
                    <Text className="text-white text-xl font-semibold">
                      {item?.day?.avgtemp_c}&#176;
                    </Text>
                  </View>
                );
              })
            }
          </ScrollView>
        </View>
      </SafeAreaView>

    </View>
  );
}
