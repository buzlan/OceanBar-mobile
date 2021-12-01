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
import { getAllOrders } from "../../services/store/cartStore/thunks/thunks";
import { reserveTableScreenStyles } from "../../styles/reserveTableScreenStyles";

const orderDetailsScreen = ({ orders, route, navigation, fetchAllOrders }) => {
  console.log("ORDERSSTATE", orders.orders);
  console.log("ID", route?.params?.orderId);
  const currentOrder = orders.orders.filter(
    (item) => item.id === route?.params?.orderId
  );
  console.log("ORDERSFROMDETAILS", orders.orders);
  console.log("ID", route?.params?.orderId);
  console.log("MYORDER", currentOrder[0]);
  console.log("DISHES", currentOrder[0]?.dishes);

  return (
    <View style={confirmationPageStyles.mainWrapper}>
      <ScrollView
        style={confirmationPageStyles.scrollViewStyle}
        nestedScrollEnabled={true}
      >
        <View>
          {currentOrder[0]?.dishes.map((item) => (
            <View style={confirmationPageStyles.mainContainer} key={uuid.v4()}>
              <View style={confirmationPageStyles.imageWithCountStyles}>
                <Image
                  source={{
                    uri: item.imageURL,
                  }}
                  style={confirmationPageStyles.imageStyle}
                />
                <View style={confirmationPageStyles.quantityContainer}>
                  <Text style={confirmationPageStyles.quantityItem}>X</Text>
                </View>
              </View>
              <View style={confirmationPageStyles.textItemsContainer}>
                <View>
                  <Text style={confirmationPageStyles.itemTitle}>
                    {item.name}
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
                  title={`${item.price} BYN`}
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
              item={currentOrder[0]?.type}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
              stylesSecondPartText={confirmationPageStyles.secondPartTextStyle}
            />
            {currentOrder[0]?.adress ? (
              <InfoItem
                title={" Адрес:"}
                item={currentOrder[0].adress}
                styleWrapper={confirmationPageStyles.itemWrapperStyle}
                stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
                stylesSecondPartText={
                  confirmationPageStyles.secondPartTextStyle
                }
              />
            ) : null}
            <InfoItem
              title={"Дата:"}
              item={currentOrder[0]?.date}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
              stylesSecondPartText={confirmationPageStyles.secondPartTextStyle}
            />
            <InfoItem
              title={"Время:"}
              item={currentOrder[0]?.time}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
              stylesSecondPartText={confirmationPageStyles.secondPartTextStyle}
            />
            <InfoItem
              title={"Контактная информация:"}
              item={"Кристина, +375296457721"}
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
            {currentOrder[0]?.tableSize ? (
              <InfoItem
                title={"Стол на"}
                item={currentOrder[0].tableSize}
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
              item={`${currentOrder[0]?.price} BYN`}
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
            <Text style={confirmationPageStyles.paidFirstText}>Оплата</Text>
            <Text style={confirmationPageStyles.paidSecondTextNotOnline}>
              {currentOrder[0]?.paymentType}
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllOrders: () => dispatch(getAllOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(orderDetailsScreen);
