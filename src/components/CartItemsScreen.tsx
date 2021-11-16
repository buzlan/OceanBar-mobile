import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FAIcon from "react-native-vector-icons/FontAwesome";

import { cartItemStyle } from "../styles/cartItemStyle";
import OneItem from "./OneItem";
import { connect } from "react-redux";
import { cartScreenStyle } from "../styles/cartScreenStyle";
import { clearBasket } from "../services/store/cartStore/thunks/thunks";
import { AppLoader } from "./AppLoader";

export const deviceWidth = Dimensions.get("window").width;

const CartItemsScreen = ({
  removeAllFromCart,
  cartItems,
  totalSum,
  navigation,
  isLoading,
}) => {
  const renderItem = ({ item }) => <OneItem item={item} />;
  return isLoading ? (
    <AppLoader />
  ) : (
    <View style={cartScreenStyle.mainContainer}>
      <View style={cartScreenStyle.headerWrapper}>
        <View style={cartScreenStyle.trashIconWrapper}>
          <TouchableOpacity onPress={() => removeAllFromCart()}>
            <FAIcon name={"trash"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <Text style={cartItemStyle.title}>Заказ</Text>
      </View>
      <FlatList
        style={cartScreenStyle.itemsContainer}
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
      />
      <View style={cartScreenStyle.mainBottomWrapper}>
        <View style={cartScreenStyle.bottomPanelWrapper}>
          <View style={cartScreenStyle.bottomPanelItemsWrapper}>
            <Text style={cartScreenStyle.totalSumTitle}>
              Итоговая сумма: {totalSum} BYN{" "}
            </Text>
            <TouchableOpacity
              style={cartScreenStyle.nextBtnContainer}
              onPress={() => navigation.navigate("TypeOrder")}
            >
              <Text style={cartItemStyle.nextBtn}>Далее</Text>
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
    removeAllFromCart: () => dispatch(clearBasket()),
  };
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.Cart.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemsScreen);
