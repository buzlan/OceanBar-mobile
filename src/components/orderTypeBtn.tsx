import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

import { orderTypeBtnsStyles } from "../styles/orderTypeBtns";

export const OrderTypeBtn = ({ onPress, title }) => {
  return (
    <View style={orderTypeBtnsStyles.mainWrapper}>
      <Button
        title={title}
        titleStyle={orderTypeBtnsStyles.titleOrderTypeBtn}
        buttonStyle={orderTypeBtnsStyles.buttonStyle}
        onPress={onPress}
      />
    </View>
  );
};
