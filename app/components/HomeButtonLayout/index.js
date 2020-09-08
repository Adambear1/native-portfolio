import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../../assets/colors";

import { Actions } from "react-native-router-flux";

export default function HomeButtonLayout() {
  function toPortfolioPage() {
    Actions.portfolio();
  }
  function toBiographyPage() {
    Actions.biography();
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={toPortfolioPage}
        style={{
          borderColor: colors.secondaryBackground,
          borderWidth: 1,
          backgroundColor: colors.secondaryBackground,
          padding: 10,
          marginRight: 20,
          borderRadius: 10,
          borderColor: colors.border,
          borderWidth: 1,
          marginTop: 10,
        }}
      >
        <Text> View Portfolio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toBiographyPage}
        style={{
          borderColor: colors.secondaryBackground,
          borderWidth: 1,
          backgroundColor: colors.secondaryBackground,
          padding: 10,
          borderRadius: 10,
          borderColor: colors.border,
          borderWidth: 1,
          marginTop: 10,
        }}
      >
        <Text> View Biography</Text>
      </TouchableOpacity>
    </View>
  );
}
