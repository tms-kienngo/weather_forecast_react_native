import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image } from "react-native";

export default function HomeScreen(){
  return (
    <View className="flex-1 bg-gray-900">
      <StatusBar style="light"/>
      <Image source={require('../../assets/images/bg.png')}
      className="absolute w-full h-full object-cover"
      />
    </View>
  )
}