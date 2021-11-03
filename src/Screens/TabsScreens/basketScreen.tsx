import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/routers";
import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import CartItemsScreen from "../../components/CartItemsScreen";
import { EmptyCart } from "../../components/EmptyCart";

interface Props extends BottomTabScreenProps<ParamListBase> {}

const BasketScreen: React.FC<Props> = ({ Cart, totalSum }) => {
  return (
    <View style={{ flex: 1 }}>
      {Cart.length > 0 ? (
        <CartItemsScreen cartItems={Cart} totalSum={totalSum} />
      ) : (
        <EmptyCart />
      )}
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    Cart: state.Cart.cartItems,
    totalSum: state.Cart.totalSum,
  };
};

export default connect(mapStateToProps, null)(BasketScreen);