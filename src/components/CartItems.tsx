import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FAIcon from "react-native-vector-icons/FontAwesome";
import uuid from "react-native-uuid";

import { cartItemStyle } from "../styles/cartItemStyle";
import { OneItem } from "./OneItem";

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
  const renderItem = ({ item }) => <OneItem item={item} />;
  return (
    <View style={cartItemStyle.mainContainer}>
      <View style={cartItemStyle.trashIcon}>
        <FAIcon name={"trash"} size={30} color={"black"} />
      </View>
      <View style={cartItemStyle.height20} />
      <Text style={cartItemStyle.title}>Заказ</Text>
      <View style={cartItemStyle.height20} />
      <FlatList
        style={cartItemStyle.itemsContainer}
        data={props.cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => uuid.v4()}
      />
      <View style={cartItemStyle.height20} />
      <View style={cartItemStyle.mainBottomWrapper}>
        <View style={cartItemStyle.bottomPanelWrapper}>
          <View style={cartItemStyle.bottomPanelItemsWrapper}>
            <Text>Итоговая сумма: {totalSum()} BYN </Text>
            <TouchableOpacity style={cartItemStyle.nextBtnContainer}>
              <Text style={cartItemStyle.nextBtn}>Далее</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
