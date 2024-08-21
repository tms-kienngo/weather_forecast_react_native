import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as React from "react";
import UVIndicator from "./components/UVIndicator";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { DateTimeHelper } from "../../utils/date_helper";

interface WeatherDetailProps {
  hour: Hour[];
}
const WeatherDetailScreen = ({ route }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Appbar.Header statusBarHeight={40}>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Appbar.Header>
        <ScrollView>
          {route.hour.map((h: Hour, index: number) => {
            const time = DateTimeHelper.convertToLocalTime(h?.time);
            const image = h.condition?.icon;
            return (
              <View key={index} style={styles.containerHour}>
                <Image
                  blurRadius={70}
                  source={require("../../../assets/images/bg.png")}
                  style={styles.imageBackground}
                />
                <View
                  style={{
                    padding: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: 500, fontSize: 20 }}
                  >
                    {time}
                  </Text>

                  <Image
                    source={{ uri: "https:" + { image } }}
                    style={{ width: 64, height: 64 }}
                  />

                  <Text
                    style={{ color: "white", fontWeight: 600, fontSize: 24 }}
                  >
                    {h.temp_c}&#176;
                  </Text>

                  {/* <UVIndicator uvIndex={h.uv} /> */}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaProvider>
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
