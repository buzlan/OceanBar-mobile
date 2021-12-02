import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Image from "react-native-elements/dist/image/Image";
import uuid from "uuid";
import { confirmationPageStyles } from "../../styles/confirmationPageStyles";
import { InfoItem } from "../../components/infoItem";
import { Button } from "react-native-elements";
import { OrderService } from "../../services/http/OrderService";
import {
  getAllDishesForOrder,
  getAllOrders,
} from "../../services/store/cartStore/thunks/thunks";
import { reserveTableScreenStyles } from "../../styles/reserveTableScreenStyles";

const orderDetailsScreen = ({
  orders,
  route,
  navigation,
  fetchAllOrders,
  fetchDishesForOrder,
  userInfo,
}) => {
  // const currentOrder = orders.orders.filter(
  //   (item) => item.id === route?.params?.orderId
  // );

  useEffect(() => {
    fetchDishesForOrder(route?.params?.orderId);
  }, [route?.params?.orderId]);
  console.log("ORDERSSTATE", JSON.stringify(orders.dishesForOrder[0]));
  console.log("ORDERSFROMDETAILS", orders.orders);
  console.log("ID", route?.params?.orderId);

  return (
    <View style={confirmationPageStyles.mainWrapper}>
      <ScrollView
        style={confirmationPageStyles.scrollViewStyle}
        nestedScrollEnabled={true}
      >
        <View>
          {orders.dishesForOrder.map((item) => (
            <View style={confirmationPageStyles.mainContainer} key={uuid.v4()}>
              <View style={confirmationPageStyles.imageWithCountStyles}>
                <Image
                  source={{
                    uri: item.dish.imageURL,
                  }}
                  style={confirmationPageStyles.imageStyle}
                />
                <View style={confirmationPageStyles.quantityContainer}>
                  <Text style={confirmationPageStyles.quantityItem}>
                    X {item.quantity}
                  </Text>
                </View>
              </View>
              <View style={confirmationPageStyles.textItemsContainer}>
                <View>
                  <Text style={confirmationPageStyles.itemTitle}>
                    {item.dish.name}
                  </Text>
                </View>
                {/* {excludedIngredients[index]?.length > 0 ? (
                <InfoItem
                  title={"Без добавления:"}
                  item={excludedIngredients[index]?.join(", ")}
                  styleWrapper={confirmationPageStyles.excludedIngWrapper}
                  stylesFirstPartText={confirmationPageStyles.withoutIngText}
                  stylesSecondPartText={confirmationPageStyles.ingTextWrapper}
                />
              ) : null} */}
                <InfoItem
                  title={`${item.dish.price} BYN`}
                  item={"за 1 позицию"}
                  styleWrapper={confirmationPageStyles.priceAndIconsContainer}
                  stylesFirstPartText={confirmationPageStyles.priceItem}
                  stylesSecondPartText={confirmationPageStyles.priceItem2}
                />
              </View>
            </View>
          ))}
          <View style={confirmationPageStyles.lineView}></View>
          <View style={confirmationPageStyles.itemsWrapperContainer}>
            <InfoItem
              title={"Тип заказа:"}
              item={orders?.dishesForOrder[0]?.order?.type}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
              stylesSecondPartText={confirmationPageStyles.secondPartTextStyle}
            />
            {orders.dishesForOrder[0]?.order?.adress ? (
              <InfoItem
                title={" Адрес:"}
                item={orders.dishesForOrder[0]?.order?.adress}
                styleWrapper={confirmationPageStyles.itemWrapperStyle}
                stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
                stylesSecondPartText={
                  confirmationPageStyles.secondPartTextStyle
                }
              />
            ) : null}
            <InfoItem
              title={"Дата:"}
              item={orders.dishesForOrder[0]?.order?.date}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
              stylesSecondPartText={confirmationPageStyles.secondPartTextStyle}
            />
            <InfoItem
              title={"Время:"}
              item={orders.dishesForOrder[0]?.order?.time}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
              stylesSecondPartText={confirmationPageStyles.secondPartTextStyle}
            />
            <InfoItem
              title={"Контактная информация:"}
              item={`${userInfo.name} , ${userInfo.email}`}
              styleWrapper={
                confirmationPageStyles.contactInformationStyleWrapper
              }
              stylesFirstPartText={
                confirmationPageStyles.firstPartTextContactStyle
              }
              stylesSecondPartText={
                confirmationPageStyles.secondPartTextContactStyle
              }
            />
            {orders.dishesForOrder[0]?.order?.tableSize ? (
              <InfoItem
                title={"Стол на"}
                item={orders.dishesForOrder[0]?.order?.tableSize}
                styleWrapper={confirmationPageStyles.itemWrapperStyle}
                stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
                stylesSecondPartText={
                  confirmationPageStyles.secondPartTextStyle
                }
              />
            ) : null}
          </View>
          <View style={confirmationPageStyles.lineView}></View>
          <View style={{ paddingTop: 30, alignItems: "center" }}>
            <InfoItem
              title={"Итого:"}
              item={`${orders.dishesForOrder[0]?.order?.price} BYN`}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={
                confirmationPageStyles.firstPartTextStyleResult
              }
              stylesSecondPartText={
                confirmationPageStyles.secondPartTextStyleResult
              }
            />
          </View>

          <View style={confirmationPageStyles.paidTypeNotOnlineWrapper}>
            <Text style={confirmationPageStyles.paidFirstText}>
              Оплата {orders.dishesForOrder[0]?.order?.paymentType}
            </Text>
          </View>
          <View style={reserveTableScreenStyles.buttonWrapper}>
            <Button
              title="Удалить заказ"
              titleStyle={reserveTableScreenStyles.titleRegisterBtn}
              buttonStyle={reserveTableScreenStyles.registerButton}
              onPress={async () => {
                try {
                  const response = await OrderService.deleteOrderById(
                    route?.params?.orderId
                  );
                  fetchAllOrders();
                  navigation.navigate("MyOrders");
                } catch (error) {
                  console.log("ERROR", error);
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.Orders,
    userInfo: state.UserData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllOrders: () => dispatch(getAllOrders()),
    fetchDishesForOrder: (id) => dispatch(getAllDishesForOrder(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(orderDetailsScreen);
