import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import WeatherDetailScreen from "../screens/weather_detail/WeatherDetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SettingScreen } from "../screens/settings/SettingScreen";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const WeatherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Weather"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Detail"
        options={{
          headerShown: false,
        }}
        component={WeatherDetailScreen}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Weather"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            if (route.name === "Weather") {
              iconName = focused ? "home" : "home-outline";
            } else {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Weather"
          options={{ headerShown: false }}
          component={WeatherStack}
        />
        <Tab.Screen
          name="Setting"
          options={{ headerShown: false }}
          component={SettingScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
