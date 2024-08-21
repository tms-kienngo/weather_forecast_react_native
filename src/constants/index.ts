import { ImageSourcePropType } from "react-native";
import AssetsImage from "../../assets/Images";

export const apiKey = "YOUR_API_KEY";

export const weatherImages: { [keyImage: string]: ImageSourcePropType } = {
    
  "Partly cloudy": AssetsImage.imgPartlyCloudy,
  "Moderate": AssetsImage.imgModerateRain,
  "Patchy rain possible": AssetsImage.imgModerateRain,
  "Sunny": AssetsImage.imgSun,
  "Clear": AssetsImage.imgSun,
  "Overcast": AssetsImage.imgCloud,
  "Partly Cloudy": AssetsImage.imgCloud,
  "Light rain": AssetsImage.imgModerateRain,
  "Moderate rain at times": AssetsImage.imgPartlyCloudy,
  "Heavy rain": AssetsImage.imgHeavyRain,
  "Heavy rain at times": AssetsImage.imgHeavyRain,
  "Patchy rain nearby": AssetsImage.imgHeavyRain,
  "Moderate or heavy rain shower": AssetsImage.imgHeavyRain,
  "Thundery outbreaks in nearby": AssetsImage.imgHeavyRain,
  "other": AssetsImage.imgModerateRain,
};

