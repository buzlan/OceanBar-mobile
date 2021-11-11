import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

export const NumberInCircle = ({ number }) => {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#FF4D00",
      }}
    >
      <Text style={{ color: "#FF4D00" }}>{number}</Text>
    </View>
  );
};
