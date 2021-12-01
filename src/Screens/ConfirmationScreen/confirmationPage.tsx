import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import Image from "react-native-elements/dist/image/Image";
import uuid from "uuid";

import DropDownPicker from "react-native-dropdown-picker";
import { confirmationPageStyles } from "../../styles/confirmationPageStyles";
import { reserveTableScreenStyles } from "../../styles/reserveTableScreenStyles";
import { InfoItem } from "../../components/infoItem";
import { OrderService } from "../../services/http/OrderService";
import {
  loadingFinish,
  loadingStart,
  setOrdersData,
} from "../../actions/order";
import { AppLoader } from "../../components/AppLoader";
import { clearBasket } from "../../services/store/cartStore/thunks/thunks";

const CARDS = [
  { label: "card1", value: "card1" },
  { label: "card2", value: "card2" },
  { label: "card3", value: "card3" },
  { label: "Новая карта", value: "Привязать новую карту" },
];
const fakeState = "В процессе";

const confirmationScreen = ({
  cart,
  totalSum,
  route,
  navigation,
  orders,
  setOrders,
  loadingStarted,
  loadingFinished,
  isLoading,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [orderData, setOrderData] = useState(route.params);
  const [excludedIngredients, setExcludedIngredients] = useState([]);
  console.log("ORDERSSTATE", orders);
  useEffect(() => {
    const excludedIng = cart.map((cartElement) => {
      const selectedIngredients = cartElement.ingredients.split(";");
      const allIngredients = cartElement.dish.ingredients.split(";");
      const excludedIngredients = allIngredients.filter(
        (ingredient) => !selectedIngredients.includes(ingredient)
      );
      return excludedIngredients;
    });

    setExcludedIngredients(excludedIng);
  }, [cart]);

  console.log(
    "DATAFORREQUEST",
    fakeState,
    orderData.orderType,
    orderData.date,
    orderData.time,
    totalSum,
    orderData.paidType,
    orderData.table,
    orderData.adress
  );

  return isLoading ? (
    <AppLoader />
  ) : (
    <View style={confirmationPageStyles.mainWrapper}>
      <ScrollView
        style={confirmationPageStyles.scrollViewStyle}
        nestedScrollEnabled={true}
      >
        <View>
          {cart.map((item, index) => (
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
                    X{item.quantity}
                  </Text>
                </View>
              </View>
              <View style={confirmationPageStyles.textItemsContainer}>
                <View>
                  <Text style={confirmationPageStyles.itemTitle}>
                    {item.dish.name}
                  </Text>
                </View>
                {excludedIngredients[index]?.length > 0 ? (
                  <InfoItem
                    title={"Без добавления:"}
                    item={excludedIngredients[index]?.join(", ")}
                    styleWrapper={confirmationPageStyles.excludedIngWrapper}
                    stylesFirstPartText={confirmationPageStyles.withoutIngText}
                    stylesSecondPartText={confirmationPageStyles.ingTextWrapper}
                  />
                ) : null}
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
              item={orderData.orderType}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
              stylesSecondPartText={confirmationPageStyles.secondPartTextStyle}
            />
            {orderData.adress ? (
              <InfoItem
                title={" Адрес:"}
                item={orderData.adress}
                styleWrapper={confirmationPageStyles.itemWrapperStyle}
                stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
                stylesSecondPartText={
                  confirmationPageStyles.secondPartTextStyle
                }
              />
            ) : null}
            <InfoItem
              title={"Дата:"}
              item={orderData.date}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={confirmationPageStyles.firstPartTextStyle}
              stylesSecondPartText={confirmationPageStyles.secondPartTextStyle}
            />
            <InfoItem
              title={"Время:"}
              item={orderData.time}
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
            {orderData.table ? (
              <InfoItem
                title={"Стол на"}
                item={orderData.table}
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
              item={`${totalSum} BYN`}
              styleWrapper={confirmationPageStyles.itemWrapperStyle}
              stylesFirstPartText={
                confirmationPageStyles.firstPartTextStyleResult
              }
              stylesSecondPartText={
                confirmationPageStyles.secondPartTextStyleResult
              }
            />
          </View>
          <View
            style={[
              confirmationPageStyles.paidWrapper,
              { height: open ? 230 : "auto" },
            ]}
          >
            {orderData.paidType === "онлайн" ? (
              <>
                <View>
                  <Text style={confirmationPageStyles.paidFirstText}>
                    Оплата
                  </Text>
                  <Text style={confirmationPageStyles.paidSecondText}>
                    {orderData.paidType}
                  </Text>
                </View>
                <View style={confirmationPageStyles.dropDownWrapper}>
                  <DropDownPicker
                    listMode="SCROLLVIEW"
                    open={open}
                    value={value}
                    items={CARDS}
                    setOpen={setOpen}
                    setValue={setValue}
                    style={confirmationPageStyles.dropDownPickerStyle}
                    textStyle={confirmationPageStyles.dropDownTextStyle}
                    labelStyle={confirmationPageStyles.dropDownLabelStyle}
                    dropDownDirection="BOTTOM"
                    dropDownContainerStyle={
                      confirmationPageStyles.dropDownContainerStyle
                    }
                    placeholder="Выберите карту"
                    placeholderStyle={
                      confirmationPageStyles.dropDownPlaceholderStyle
                    }
                  />
                </View>
              </>
            ) : (
              <View style={confirmationPageStyles.paidTypeNotOnlineWrapper}>
                <Text style={confirmationPageStyles.paidFirstText}>Оплата</Text>
                <Text style={confirmationPageStyles.paidSecondTextNotOnline}>
                  {orderData.paidType}
                </Text>
              </View>
            )}
          </View>
          <View style={reserveTableScreenStyles.buttonWrapper}>
            <Button
              title="Подтвердить"
              titleStyle={reserveTableScreenStyles.titleRegisterBtn}
              disabled={value || orderData.paidType !== "онлайн" ? false : true}
              disabledStyle={reserveTableScreenStyles.disabledRegisterButton}
              disabledTitleStyle={
                reserveTableScreenStyles.disabledTitleRegisterBtn
              }
              buttonStyle={reserveTableScreenStyles.registerButton}
              onPress={async () => {
                try {
                  loadingStarted();
                  const response = await OrderService.createOrder(
                    fakeState,
                    orderData.orderType,
                    orderData.date,
                    orderData.time,
                    totalSum,
                    orderData.paidType,
                    orderData.table,
                    orderData.adress
                  );
                  navigation.navigate("ConfirmationFinal", {
                    order: response.data,
                  });
                  loadingFinished();
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
    cart: state.Cart.cartItems,
    totalSum: state.Cart.totalSum,
    isLoading: state.Orders.isLoading,
    orders: state.Orders,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setOrders: (item) => dispatch(setOrdersData(item)),
    loadingStarted: () => dispatch(loadingStart()),
    loadingFinished: () => dispatch(loadingFinish()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(confirmationScreen);
