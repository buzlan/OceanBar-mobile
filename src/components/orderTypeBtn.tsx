import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const OrderTypeBtn = ({ navigation, title, navigationScreen }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigationScreen)}>
      <Text style={{ fontSize: 25, fontFamily: "Roboto", fontWeight: "500" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
