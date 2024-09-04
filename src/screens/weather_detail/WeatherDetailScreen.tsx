import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import { LineChart } from "react-native-chart-kit";
import React, { useState, useEffect, useCallback } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import AssetsImage from "../../../assets/Images";
import { Compass } from "./components/compass";

export type WeatherDetailParam = {
  hour: Hour[],
  wind_dir: number,
}


const WeatherDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const param = route.params as WeatherDetailParam;
  const hour = param.hour;
  const [tempc, setTempc] = useState<number[] | []>([]);


  useEffect(() => {
    if (hour.length > 0) {
      const temp: number[] = [];
      for (let i = 0; i < hour.length; i++) {
        temp.push(hour[i].temp_c);
      }
      setTempc(temp);
    }

  }, []);
  return (
    <View style={styles.container}>
      <Image
        blurRadius={70}
        source={AssetsImage.imgBackground}
        style={styles.imageBackground}
      />
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title='' />
      </Appbar.Header>
      <View style={{ flex: 1, alignContent: "center", padding: 16, }}>
        {
          tempc.length > 0 ? <LineChart
            data={{
              labels: [],
              datasets: [
                {
                  data: tempc
                }
              ],
            }}
            width={(Dimensions.get("window").width) - 32}
            height={(Dimensions.get("window").height) / 4}

            yAxisInterval={1}
            style={{ borderRadius: 16 }}
            chartConfig={{

              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: "0",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
          /> : null
        }
        <Compass windDir={param.wind_dir} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    borderRadius: 24,
  },
  containerSafeArea: {
    flex: 1,
    position: "relative",
  },
  containerHour: {
    marginHorizontal: 16,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
});

export default WeatherDetailScreen;
