import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/routers";
import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { CartItems } from "../../components/CartItems";
import { EmptyCart } from "../../components/EmptyCart";

interface Props extends BottomTabScreenProps<ParamListBase> {}

const BasketScreen: React.FC<Props> = ({ cartItems }) => {
  return (
    <View style={{ flex: 1 }}>
      {cartItems.length > 0 ? (
        <CartItems cartItems={cartItems} />
      ) : (
        <EmptyCart />
      )}
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps, null)(BasketScreen);
