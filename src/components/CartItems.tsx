import React from "react";
import { Dimensions, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { cartItemStyle } from "../styles/cartItemStyle";
import { OneItem } from "./OneItem";
import uuid from "react-native-uuid";

export const deviceWidth = Dimensions.get("window").width;

export const CartItems = (props) => {
  {
    console.log(props.cartItems);
  }
  let sum = 0;
  const totalSum = () => {
    props.cartItems.map((item) => {
      sum += item.price;
    });
    return sum;
  };
  return (
    <View style={cartItemStyle.mainContainer}>
      <View style={cartItemStyle.height20} />
      <Text style={cartItemStyle.title}>Заказ</Text>
      <View style={cartItemStyle.height10} />
      <View style={cartItemStyle.itemContainerBtn}>
        <ScrollView>
          {props.cartItems.map((item) => (
            <OneItem item={item} key={uuid.v4()} />
          ))}
        </ScrollView>
      </View>
      <View style={{ height: 20 }} />

      <Text>Итоговая сумма: {totalSum()} BYN </Text>
      <TouchableOpacity style={cartItemStyle.nextBtnContainer}>
        <Text style={cartItemStyle.nextBtn}>Далее</Text>
      </TouchableOpacity>

      <View style={{ height: 10 }} />
    </View>
  );
};
