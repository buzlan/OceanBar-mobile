import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <TouchableOpacity onPress={() => navigation.navigate("ReserveTable")}>
        <Text style={{ fontSize: 25, fontFamily: "Roboto", fontWeight: "500" }}>
          Бронирование стола
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ fontSize: 25, fontFamily: "Roboto", fontWeight: "500" }}>
          Доставка заказа
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ fontSize: 25, fontFamily: "Roboto", fontWeight: "500" }}>
          На вынос
        </Text>
      </TouchableOpacity>
    </View>
  );
};
