import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";

import FAIcon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { AppLoader } from "../../components/AppLoader";
import { getAllOrders } from "../../services/store/cartStore/thunks/thunks";
import { myOrdersStyle } from "../../styles/myOrdersStyle";
import { orderDeliveryScreenStyles } from "../../styles/orderDeliveryScreenStyles";
import { formatDate } from "../../utils/dateUtils";
//LAYOUT PAGE + QUERY
const currentDate = new Date();
const myOrdersScreen = ({ fetchAllOrders, orders, isLoading, navigation }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  useEffect(() => {
    fetchAllOrders();
  }, [navigation]);
  console.log("ORDERA", orders);
  return isLoading ? (
    <AppLoader />
  ) : (
    <View style={myOrdersStyle.container}>
      <View style={myOrdersStyle.buttonWrapper}>
        <View>
          <Button
            title="Текущие заказы"
            titleStyle={
              selectedButton === 1
                ? myOrdersStyle.titleRegisterBtn
                : myOrdersStyle.titleRegisterBtnNotSelected
            }
            buttonStyle={
              selectedButton === 1
                ? myOrdersStyle.registerButton
                : myOrdersStyle.registerButtonNotSelected
            }
            onPress={() => {
              setSelectedButton(1);
            }}
          />
        </View>
        <View>
          <Button
            title="История заказов"
            titleStyle={
              selectedButton === 2
                ? myOrdersStyle.titleRegisterBtn
                : myOrdersStyle.titleRegisterBtnNotSelected
            }
            buttonStyle={
              selectedButton === 2
                ? myOrdersStyle.registerButton
                : myOrdersStyle.registerButtonNotSelected
            }
            onPress={() => {
              setSelectedButton(2);
            }}
          />
        </View>
      </View>
      {selectedButton === 1
        ? orders?.orders?.map((item) => (
            <View
              style={orderDeliveryScreenStyles.selectPaidTypeWrapper}
              key={item.id}
            >
              <TouchableOpacity
                onPress={() => {}}
                style={orderDeliveryScreenStyles.dataElWrapper}
              >
                <Text
                  style={orderDeliveryScreenStyles.dataText}
                  onPress={() => {
                    navigation.navigate("OrderDetails", {
                      orderId: item.id,
                    });
                  }}
                >
                  Заказ №{item.id} от {formatDate(currentDate)}
                </Text>
                <FAIcon name={"chevron-right"} size={30} color={"black"} />
              </TouchableOpacity>
            </View>
          ))
        : null}
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    orders: state.Orders,
    isLoading: state.Orders.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    fetchAllOrders: () => dispatch(getAllOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(myOrdersScreen);
