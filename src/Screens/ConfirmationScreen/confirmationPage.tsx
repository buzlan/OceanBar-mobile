import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Image from "react-native-elements/dist/image/Image";
import uuid from "uuid";
import DropDownPicker from "react-native-dropdown-picker";
import { confirmationPageStyles } from "../../styles/confirmationPageStyles";
import { Button } from "react-native-elements";
import { reserveTableScreenStyles } from "../../styles/reserveTableScreenStyles";
const CARDS = [
  { label: "card1", value: "card1" },
  { label: "card2", value: "card2" },
  { label: "card3", value: "card3" },
  { label: "Новая карта", value: "Привязать новую карту" },
];

const confirmationScreen = ({ cart, totalSum, route }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [orderData, setOrderData] = useState(route.params);
  const [excludedIngredients, setExcludedIngredients] = useState([]);
  console.log("CARTTTTTTTTTTT", cart);
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
  console.log("EXCLUDED", excludedIngredients);

  return (
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
                  <View style={confirmationPageStyles.excludedIngWrapper}>
                    <Text style={confirmationPageStyles.withoutIngText}>
                      Без добавления:
                    </Text>
                    <Text style={confirmationPageStyles.ingTextWrapper}>
                      {excludedIngredients[index]?.join(", ")}
                    </Text>
                  </View>
                ) : null}
                <View style={confirmationPageStyles.priceAndIconsContainer}>
                  <Text style={confirmationPageStyles.priceItem}>
                    {item.dish.price} BYN
                  </Text>
                  <Text style={confirmationPageStyles.priceItem2}>
                    за 1 позицию
                  </Text>
                </View>
              </View>
            </View>
          ))}
          <View style={confirmationPageStyles.lineView}></View>
          <View style={confirmationPageStyles.itemsWrapperContainer}>
            <View style={confirmationPageStyles.itemWrapperStyle}>
              <Text style={confirmationPageStyles.firstPartTextStyle}>
                Тип заказа:
              </Text>
              <Text style={confirmationPageStyles.secondPartTextStyle}>
                {orderData.orderType}
              </Text>
            </View>
            <View style={confirmationPageStyles.itemWrapperStyle}>
              <Text style={confirmationPageStyles.firstPartTextStyle}>
                Дата:
              </Text>
              <Text style={confirmationPageStyles.secondPartTextStyle}>
                {orderData.date}
              </Text>
            </View>
            <View style={confirmationPageStyles.itemWrapperStyle}>
              <Text style={confirmationPageStyles.firstPartTextStyle}>
                Время:
              </Text>
              <Text style={confirmationPageStyles.secondPartTextStyle}>
                {orderData.time}
              </Text>
            </View>
            <View style={confirmationPageStyles.itemWrapperStyle}>
              <Text style={confirmationPageStyles.firstPartTextStyle}>
                Стол на
              </Text>
              <Text style={confirmationPageStyles.secondPartTextStyle}>
                {orderData.table}
              </Text>
            </View>
          </View>
          <View style={confirmationPageStyles.lineView}></View>
          <View style={{ paddingTop: 30, alignItems: "center" }}>
            <View style={confirmationPageStyles.itemWrapperStyle}>
              <Text style={confirmationPageStyles.firstPartTextStyleResult}>
                Итого:
              </Text>
              <Text style={confirmationPageStyles.secondPartTextStyleResult}>
                {totalSum} BYN
              </Text>
            </View>
          </View>
          <View
            style={[
              confirmationPageStyles.paidWrapper,
              { height: open ? 230 : "auto" },
            ]}
          >
            <View>
              <Text style={confirmationPageStyles.paidFirstText}>Оплата</Text>
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
          </View>
          <View style={reserveTableScreenStyles.buttonWrapper}>
            <Button
              title="Подтвердить"
              titleStyle={reserveTableScreenStyles.titleRegisterBtn}
              disabled={value ? false : true}
              disabledStyle={reserveTableScreenStyles.disabledRegisterButton}
              disabledTitleStyle={
                reserveTableScreenStyles.disabledTitleRegisterBtn
              }
              buttonStyle={reserveTableScreenStyles.registerButton}
              onPress={() => {}}
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
    isLoading: state.Cart.isLoading,
  };
};

export default connect(mapStateToProps, null)(confirmationScreen);
