import React from "react";
import { View } from "react-native";
import { OrderTypeBtn } from "../../components/orderTypeBtn";

import { orderTypeScreenStyles } from "../../styles/orderTypeScreenStyles";

export const orderTypeScreen = ({ navigation }) => {
  return (
    <View style={orderTypeScreenStyles.mainWrapper}>
      <OrderTypeBtn
        title={"Бронирование стола"}
        onPress={() => navigation.navigate("ReserveTable")}
      />
      <OrderTypeBtn
        title={"Доставка заказа"}
        onPress={() => navigation.navigate("ReserveTable")}
      />
      <OrderTypeBtn
        title={"Навынос"}
        onPress={() => navigation.navigate("OrderTakeaway")}
      />
    </View>
  );
};
