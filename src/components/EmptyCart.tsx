import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

export const EmptyCart = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold", fontFamily: "Roboto" }}>
        В Корзине пока нет товаров
      </Text>
    </View>
  );
};
