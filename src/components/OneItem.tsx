import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import IoIcon from "react-native-vector-icons/Ionicons";
import Image from "react-native-elements/dist/image/Image";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

import { updateItemsFromCart } from "../actions/cart";
import { ModalComponent } from "./Modal";
import {
  deleteItem,
  updateIngredientsItem,
  updateQuantityItem,
} from "../services/store/cartStore/thunks/thunks";
import { AppLoader } from "./AppLoader";
import { cartItemStyle } from "../styles/cartItemStyle";

const OneItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [excludedIngredients, setExcludedIngredients] = useState([]);
  const handleChangeQuantity = (newQuantity) => {
    if (newQuantity === 0) {
      props.deleteItemFromCart(props.item.id);
    } else {
      props.updateQuantityItemCart({
        id: props.item.id,
        quantity: newQuantity,
      });
    }
  };

  useEffect(() => {
    const selectedIngredients = props.item.ingredients.split(";");
    const allIngredients = props.item.dish.ingredients.split(";");
    const excludedIngredients = allIngredients.filter(
      (ingredient) => !selectedIngredients.includes(ingredient)
    );
    setExcludedIngredients(excludedIngredients);
  }, [props.item]);

  return props.isLoading ? (
    <AppLoader />
  ) : (
    <>
      <View style={cartItemStyle.mainContainer}>
        <Image
          source={{
            uri: props.item.dish.imageURL,
          }}
          style={cartItemStyle.imageStyle}
        />
        <View style={cartItemStyle.textItemsContainer}>
          <View>
            <Text style={cartItemStyle.itemTitle}>{props.item.dish.name}</Text>
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
              {props.item.dish.price * props.item.quantity} BYN
            </Text>

            <View style={cartItemStyle.quantityContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleChangeQuantity(props.item.quantity - 1);
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
                  handleChangeQuantity(props.item.quantity + 1);
                }}
              >
                <IoIcon name="add-circle-outline" size={30} color={"#FF4D00"} />
              </TouchableOpacity>
            </View>
          </View>
          {excludedIngredients.length > 0 ? (
            <View style={cartItemStyle.excludedIngWrapper}>
              <Text style={cartItemStyle.withoutIngText}>Без добавления:</Text>
              <Text style={cartItemStyle.ingTextWrapper}>
                {excludedIngredients.join(", ")}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
      <ModalComponent
        modalVisible={modalVisible}
        item={props.item}
        setModalVisible={setModalVisible}
        sendNewData={props.updateIngredientsFromCart}
      />
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    deleteItemFromCart: (id) => dispatch(deleteItem(id)),
    updateQuantityItemCart: (item) => dispatch(updateQuantityItem(item)),
    updateItemsFromCart: (dish) => dispatch(updateItemsFromCart(dish)),
    updateIngredientsFromCart: (item) => dispatch(updateIngredientsItem(item)),
  };
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.Cart.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OneItem);
