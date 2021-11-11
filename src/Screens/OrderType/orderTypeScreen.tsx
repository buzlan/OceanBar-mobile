import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { OrderTypeBtn } from "../../components/orderTypeBtn";

export const orderTypeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 130,
      }}
    >
      <OrderTypeBtn
        navigation={navigation}
        title={"Бронирование стола"}
        navigationScreen={"ReserveTable"}
      />
      <OrderTypeBtn
        navigation={navigation}
        title={"Доставка заказа"}
        navigationScreen={"ReserveTable"}
      />
      <OrderTypeBtn
        navigation={navigation}
        title={"На вынос"}
        navigationScreen={"ReserveTable"}
      />
    </View>
  );
};
