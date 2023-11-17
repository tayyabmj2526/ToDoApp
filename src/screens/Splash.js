import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Appstyle from "../styles/Appstyle";
const background = require("../../assets/background.jpg");
export default function Splash() {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate("Login");
  }, 5000);
  return (
    <ImageBackground style={Appstyle.con} source={background}></ImageBackground>
  );
}
