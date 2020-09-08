import React from "react";
import { View, Text } from "react-native";
import colors from "../../assets/colors";

export default function HomeContainer(props) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {props}
    </View>
  );
}
