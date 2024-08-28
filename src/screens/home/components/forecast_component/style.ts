import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    forecastContainer: {
      marginHorizontal: 16,
      display: "flex",
      justifyContent: "space-around",
      flex: 1,
      marginBottom: 8,
    },
    location: {
      color: "white",
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
    },
    country: {
      fontSize: 18,
      fontWeight: 500,
      color: "#d1d5db",
    },
    currentLocationImageContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
    weatherImage: {
      width: 100,
      height: 100,
    },
    degreeContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
    tempc: {
      textAlign: "center",
      fontWeight: "bold",
      color: "white",
      fontSize: 36,
      marginBottom: 8,
    },
    description: {
      textAlign: "center",
      color: "white",
      fontSize: 20,
      letterSpacing: 1,
    },
    otherStatsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 16,
    },
    otherStatsDetailContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    otherStatsImage: {
      width: 24,
      height: 24,
    },
    otherStatsValue: {
      color: "white",
      fontWeight: 600,
      fontSize: 16,
      marginLeft: 8,
    },
  });

export default styles;