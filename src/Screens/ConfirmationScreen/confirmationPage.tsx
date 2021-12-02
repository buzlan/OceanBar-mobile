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
import { newAdressScreenStyles } from "../../styles/newAdressScreenStyles";
import { adressDeliveryScreenStyles } from "../../styles/adressDeliveryScreenStyles";

const CARDS = [{ label: "Нет карт", value: "" }];
const fakeState = "В процессе";

const confirmationScreen = ({
  cart,
  totalSum,
  route,
  navigation,
  loadingStarted,
  loadingFinished,
  isLoading,
  removeAllFromCart,
  creditCards,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [orderData, setOrderData] = useState(route.params);
  const CardsItems = [];
  creditCards.forEach((v) =>
    CardsItems.push({
      label: v.cardNumber.substring(12, 16),
      value: v.cardNumber,
    })
  );
  console.log("MyCards", CardsItems);
  const [excludedIngredients, setExcludedIngredients] = useState([]);
  console.log("CREDITCARDS FROM CONFIRMPAGE", creditCards);
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
              <View>
                <View style={{ flexDirection: "row" }}>
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
                      key={uuid.v4()}
                      listMode="SCROLLVIEW"
                      open={open}
                      value={value}
                      items={creditCards.length > 0 ? CardsItems : CARDS}
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
                </View>
                <View style={{ paddingTop: 40 }}>
                  <Button
                    title="Добавить карту"
                    titleStyle={newAdressScreenStyles.titleRegisterBtn}
                    buttonStyle={newAdressScreenStyles.registerButton}
                    onPress={() => {
                      navigation.navigate("SetCard", { from: "Confirm" });
                    }}
                  />
                </View>
              </View>
            ) : (
              <View style={confirmationPageStyles.paidTypeNotOnlineWrapper}>
                <Text style={confirmationPageStyles.paidFirstText}>
                  Оплата {orderData.paidType}
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
                  removeAllFromCart();
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
    creditCards: state.CardStore.creditCards,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setOrders: (item) => dispatch(setOrdersData(item)),
    loadingStarted: () => dispatch(loadingStart()),
    loadingFinished: () => dispatch(loadingFinish()),
    removeAllFromCart: () => dispatch(clearBasket()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(confirmationScreen);
