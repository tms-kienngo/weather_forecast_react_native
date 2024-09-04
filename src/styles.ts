import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        position: "relative",
    },
    containerLoading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
    },
});