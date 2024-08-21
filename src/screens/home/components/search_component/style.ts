import {StyleSheet} from "react-native";

const  styles = StyleSheet.create({
    container: {
      height: "7%",
      marginHorizontal: 16,
      position: "relative",
      zIndex: 50,
    },
    inputContainer: {
      width: "100%",
      position: "absolute",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      borderRadius: 50,
    },
    textInput: {
      paddingLeft: 16,
      height: 40,
      flex: 1,
      fontSize: 16,
      color: "white",
    },
    iconSearch: {
      backgroundColor: "rgba(255,255,255, 0.2)",
      padding: 12,
      margin: 4,
      borderRadius: 25,
    },
    showSearchContainer: {
      position: "absolute",
      width: "100%",
      backgroundColor: "#d1d5db",
      top: 16,
      borderRadius: 30,
      marginTop: 40,
      paddingVertical: 16,
    },
    touchLocationContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      marginBottom: 4,
      borderWidth: 0,
    },
    textLocation: {
      color: "black",
      fontSize: 18,
      marginLeft: 8,
    },
  });

export default styles;