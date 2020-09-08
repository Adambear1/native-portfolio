import React from "react";
import { View, Text, ImageBackground } from "react-native";

export default function HomeImageBackground(props) {
  return (
    <ImageBackground
      source={require("./images/background-image.jpg")}
      resizeMode="cover"
      blurRadius={0.9}
      style={{ flex: 1 }}
    >
      {props}
    </ImageBackground>
  );
}
