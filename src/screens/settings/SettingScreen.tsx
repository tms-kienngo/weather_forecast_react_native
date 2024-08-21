import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SettingScreen = () => {
  return (
    <View style={{ flex: 1, position: "relative", backgroundColor: "gray" }}>
      <SafeAreaView style={{ flex: 1, position: "relative" }}>
        <Text
          style={{
            position: "absolute",
            flex: 1,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          Setting Screen
        </Text>
      </SafeAreaView>
    </View>
  );
};
