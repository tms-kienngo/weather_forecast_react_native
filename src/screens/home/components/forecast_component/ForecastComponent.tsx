import { View, Text, Image, ImageSourcePropType } from "react-native";
import styles from "./style";
import AssetsImage from "../../../../../assets/Images";
import { DateTimeHelper } from "../../../../utils/date_helper";

type ForecastProps = {
  city?: string;
  country?: string;
  image?: ImageSourcePropType;
  tempc?: number;
  description?: string;
  wind?: number;
  humidity?: number;
  time?: string;
};
const ForecastComponents = (props: ForecastProps) => {
  return (
    <View style={styles.forecastContainer}>
      {/**Locations */}
      <Text style={styles.location}>
        {props.city}
        <Text style={styles.country}>, {props?.country}</Text>
      </Text>
      {/**Weather image */}
      <View style={styles.currentLocationImageContainer}>
        <Image source={props.image} style={styles.weatherImage} />
      </View>
      {/**Degree celcius */}
      <View style={styles.degreeContainer}>
        <Text style={styles.tempc}>{props.tempc}&#176;</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      {/** Other stats */}
      <View style={styles.otherStatsContainer}>
        <View style={styles.otherStatsDetailContainer}>
          <Image source={AssetsImage.iconWind} style={styles.otherStatsImage} />
          <Text style={styles.otherStatsValue}>{props.wind}km</Text>
        </View>
        <View style={styles.otherStatsDetailContainer}>
          <Image source={AssetsImage.iconDrop} style={styles.otherStatsImage} />
          <Text style={styles.otherStatsValue}>{props.humidity}%</Text>
        </View>
        <View style={styles.otherStatsDetailContainer}>
          <Image source={AssetsImage.iconSun} style={styles.otherStatsImage} />
          {
            props.time != null ? (
              <Text style={styles.otherStatsValue}>{DateTimeHelper.convertToLocalTime(props?.time ?? "")}</Text>
            ) : null
          }
        </View>
      </View>
    </View>
  );
};

export default ForecastComponents;
