import React from "react";
import { Text, View } from "react-native";
import IoIcon from "react-native-vector-icons/Ionicons";
import Image from "react-native-elements/dist/image/Image";
import { TouchableOpacity } from "react-native-gesture-handler";

import { cartItemStyle } from "../styles/cartItemStyle";
import { connect } from "react-redux";
import { addQuantity, minusQuantity } from "../actions/cart";
const OneItem = (props) => {
  return (
    <View style={cartItemStyle.mainContainer}>
      <Image
        source={{
          uri: props.item.imageURL,
        }}
        style={cartItemStyle.imageStyle}
      />
      <View style={cartItemStyle.textItemsContainer}>
        <View>
          <Text style={cartItemStyle.itemTitle}>{props.item.name}</Text>
          <TouchableOpacity>
            <Text style={cartItemStyle.changeIngredientsBtnTitle}>
              Изменить состав
            </Text>
          </TouchableOpacity>
        </View>
        <View style={cartItemStyle.priceAndIconsContainer}>
          <Text style={cartItemStyle.priceItem}>
            {props.item.price * props.item.quantity} BYN
          </Text>
          <View style={cartItemStyle.quantityContainer}>
            <TouchableOpacity
              onPress={() => {
                props.minusQuantityFromItem(props.item.id);
              }}
            >
              <IoIcon
                name="remove-circle-outline"
                size={30}
                color={"#FF4D00"}
              />
            </TouchableOpacity>
            <Text style={cartItemStyle.quantityItem}>
              {props.item.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.addQuantityToItem(props.item.id);
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
const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    addQuantityToItem: (idItem) => dispatch(addQuantity(idItem)),
    minusQuantityFromItem: (idItem) => dispatch(minusQuantity(idItem)),
  };
};

export default connect(null, mapDispatchToProps)(OneItem);
