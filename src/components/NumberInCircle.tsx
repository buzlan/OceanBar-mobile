import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

import { numberInCircleStyles } from "../styles/numberInCircleStyles";

export const NumberInCircle = ({ number }) => {
  return (
    <View style={numberInCircleStyles.mainWrapper}>
      <Text style={numberInCircleStyles.textStyle}>{number}</Text>
    </View>
  );
};
