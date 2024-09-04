import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveCityName = async (cityName: string) => {
  try {
    await AsyncStorage.setItem("cityName", cityName);
  } catch (error) {
    console.log("Failed to save the city name to storage", error);
  }
};

export const getCityName = async (): Promise<string | null> => {
  try {
    const cityName = await AsyncStorage.getItem("cityName");
    return cityName;
  } catch (error) {
    console.log("Failed to fetch the city name from storage", error);
    return null;
  }
};
