import React, { useState } from "react";
import { Text, View } from "react-native";
import IoIcon from "react-native-vector-icons/Ionicons";
import Image from "react-native-elements/dist/image/Image";
import { TouchableOpacity } from "react-native-gesture-handler";

import { cartItemStyle } from "../styles/cartItemStyle";
import { connect } from "react-redux";
import {
  addQuantity,
  minusQuantity,
  updateItemsFromCart,
} from "../actions/cart";
import { ModalComponent } from "./Modal";
const OneItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const getNewIng = (newIng, excluded) => {
    props.updateItemsFromCart({
      ...props.item,
      ingredients: newIng,
      excludedIng: excluded,
    });
  };
  return (
    <>
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
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
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
          {props.item.excludedIng.length > 0 ? (
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                Без добавления:
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "400",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                {props.item.excludedIng
                  ? props.item.excludedIng.join(", ")
                  : null}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
      <ModalComponent
        modalVisible={modalVisible}
        items={props.item}
        setModalVisible={setModalVisible}
        sendNewData={getNewIng}
      />
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    addQuantityToItem: (idItem) => dispatch(addQuantity(idItem)),
    minusQuantityFromItem: (idItem) => dispatch(minusQuantity(idItem)),
    updateItemsFromCart: (dish) => dispatch(updateItemsFromCart(dish)),
  };
};

export default connect(null, mapDispatchToProps)(OneItem);
