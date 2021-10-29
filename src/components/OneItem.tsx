import React, { useState } from "react";
import { Text, View } from "react-native";
import IoIcon from "react-native-vector-icons/Ionicons";
import Image from "react-native-elements/dist/image/Image";
import { TouchableOpacity } from "react-native-gesture-handler";

import { cartItemStyle } from "../styles/cartItemStyle";
export const OneItem = (props) => {
  const [count, setCount] = useState(1);
  const onChangeQuat = (type) => {
    if (type) {
      setCount(count + 1);
    } else {
      if (count === 1) {
        setCount(1);
      } else {
        setCount(count - 1);
      }
    }
  };
  return (
    <View style={cartItemStyle.items}>
      <Image
        source={{
          uri: "https://www.edimdoma.ru/system/images/contents/0000/6787/wide/AdobeStock_275611083_%D0%B8%D1%81%D0%BF%D1%80.jpg?1564142039",
        }}
        style={cartItemStyle.imageStyle}
      />
      <View style={cartItemStyle.textItemsContainer}>
        <View>
          <Text style={cartItemStyle.itemTitle}>{props.item.name}</Text>
          <TouchableOpacity>
            <Text style={cartItemStyle.changeIngredientsText}>
              Изменить состав
            </Text>
          </TouchableOpacity>
        </View>
        <View style={cartItemStyle.priceAndIconsContainer}>
          <Text style={cartItemStyle.priceItem}>
            {props.item.price * count} BYN
          </Text>
          <View style={cartItemStyle.iconsContainer}>
            <TouchableOpacity
              onPress={() => {
                onChangeQuat(false);
              }}
            >
              <IoIcon
                name="remove-circle-outline"
                size={30}
                color={"#FF4D00"}
              />
            </TouchableOpacity>
            <Text style={cartItemStyle.countItems}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                onChangeQuat(true);
              }}
            >
              <IoIcon name="add-circle-outline" size={30} color={"#FF4D00"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
