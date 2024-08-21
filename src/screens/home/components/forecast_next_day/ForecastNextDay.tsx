import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { weatherImages } from "../../../../constants";
import { DateTimeHelper } from "../../../../utils/date_helper";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { useEffect, useState } from "react";

type ForecastNextDayProps = {
  forecastDays: ForecastDay[];
};
const ForecastNextDay = (props: ForecastNextDayProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.nextDayContainer}>
      <View style={styles.calendarContainer}>
        <CalendarDaysIcon size={22} color="white" />
        <Text style={styles.calendarText}>Daily forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {props?.forecastDays?.map((item, index) => {
          let dayName = DateTimeHelper.convertDateToShortFormat(item.date);
          return (
            <TouchableOpacity key={index} onPress={() => {}}>
              <View
                style={[
                  styles.nextDayComponent,
                  { marginLeft: index == 0 ? 0 : 12 },
                ]}
              >
                <Image
                  source={{ uri: "https:" + item.day.condition.icon }}
                  style={{ width: 24, height: 24, marginBottom: 4 }}
                />
                <Text style={{ color: "white", marginBottom: 4 }}>
                  {dayName}
                </Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>
                  {item?.day?.avgtemp_c}&#176;
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ForecastNextDay;
