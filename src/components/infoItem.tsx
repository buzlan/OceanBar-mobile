import React from "react";
import { Text, View } from "react-native";

export const InfoItem = ({
  title,
  item,
  styleWrapper,
  stylesFirstPartText,
  stylesSecondPartText,
}) => {
  return (
    <View style={styleWrapper}>
      <Text style={stylesFirstPartText}>{title}</Text>
      <Text style={stylesSecondPartText}>{item}</Text>
    </View>
  );
};
