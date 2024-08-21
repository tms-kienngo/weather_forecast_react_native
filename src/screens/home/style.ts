import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerLoading: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      flex: 1,
      position: "relative",
      backgroundColor: "gray",
    },
    containerSafeArea: {
      flex: 1,
      position: "relative",
    },
    imageBackground: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      position: "absolute",
    },
  });

export default styles;