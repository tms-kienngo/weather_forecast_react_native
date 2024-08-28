import {StyleSheet} from "react-native";
const  styles = StyleSheet.create({
    nextDayContainer: {
      marginBottom: 8,
    },
    calendarContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 20,
      marginBottom: 12,
    },
    calendarText: {
      color: "white",
      fontSize: 16,
      paddingLeft: 8,
    },
    nextDayComponent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 24,
      backgroundColor: "rgba(255,255,255, 0.15)",
      padding: 16,
    },
  });

export default styles;
