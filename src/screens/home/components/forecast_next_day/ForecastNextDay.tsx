import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { DateTimeHelper } from "../../../../utils/date_helper";
import { NavigationProp, Theme, useNavigation } from "@react-navigation/native";
import styles from "./style";
import { RootStackParamList } from "../../../../types";
import { WeatherDetailParam } from "../../../weather_detail/WeatherDetailScreen";

type ForecastNextDayProps = {
  forecastDays: ForecastDay[],
  wind_dir: number,
  theme: Theme,
}

type WeatherDetailNavigationProp = NavigationProp<RootStackParamList, 'WeatherDetail'>;
const ForecastNextDay = (props: ForecastNextDayProps) => {
  const navigation = useNavigation<WeatherDetailNavigationProp>();
  return (
    <View style={styles.nextDayContainer}>
      <View style={styles.calendarContainer}>
        <CalendarDaysIcon size={22} color={props.theme.colors.text} />
        <Text style={[styles.calendarText, {
          color: props.theme.colors.text,
        }]}>Daily forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {props?.forecastDays?.map((item, index) => {
          let dayName = DateTimeHelper.convertDateToShortFormat(item.date);

          const params: WeatherDetailParam = {
            hour: item.hour,
            wind_dir: props.wind_dir,
          };
          return (
            <TouchableOpacity key={index} onPress={() => {
              navigation.navigate('WeatherDetail', params);
            }}>
              <View
                style={[
                  styles.nextDayComponent,
                  {
                    marginLeft: index == 0 ? 0 : 12,
                    backgroundColor: props.theme.colors.card,
                  },
                ]}
              >
                <Image
                  source={{ uri: "https:" + item.day.condition.icon }}
                  style={{ width: 24, height: 24, marginBottom: 4 }}
                />
                <Text style={{ color: props.theme.colors.text, marginBottom: 4 }}>
                  {dayName}
                </Text>
                <Text style={{ color: props.theme.colors.text, fontSize: 16, fontWeight: 600 }}>
                  {item?.day?.avgtemp_c}&#176;
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View >
  );
};

export default ForecastNextDay;
