import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/routers";
import React, { useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import CartItemsScreen from "../../components/CartItemsScreen";
import { EmptyCart } from "../../components/EmptyCart";
import { getAllCartItems } from "../../services/store/cartStore/thunks/thunks";

interface Props extends BottomTabScreenProps<ParamListBase> {}

const BasketScreen: React.FC<Props> = ({
  cart,
  totalSum,
  navigation,
  fetchAllCartItems,
}) => {
  console.log("NAVIGATIONBASKET", navigation);
  useEffect(() => {
    fetchAllCartItems();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {cart.length > 0 ? (
        <CartItemsScreen
          cartItems={cart}
          totalSum={totalSum}
          navigation={navigation}
        />
      ) : (
        <EmptyCart />
      )}
    </View>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.Cart.cartItems,
    totalSum: state.Cart.totalSum,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    fetchAllCartItems: () => dispatch(getAllCartItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
