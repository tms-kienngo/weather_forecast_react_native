import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/settings/SettingScreen';
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherDetailScreen from '../screens/weather_detail/WeatherDetailScreen';
import { RootStackParamList } from '../types';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function WeatherStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home" component={HomeScreen} options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WeatherDetail" component={WeatherDetailScreen} options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName: any;
          if (route.name === "Weather") {
            iconName = focused ? "home" : "home-outline";
          } else {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={theme.colors.text} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.card,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.border,
      })}
    >
      <Tab.Screen name="Weather" component={WeatherStack} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
