import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";

import { confirmationFinalScreenStyles } from "../../styles/confirmationFinalScreenStyles";
import { formatDate } from "../../utils/dateUtils";

const currentDate = new Date();
export const confirmationFinalScreen = ({ navigation, route }) => {
  const orderNumber = route.params.order.order.id;
  return (
    <View style={confirmationFinalScreenStyles.mainWrapper}>
      <View style={confirmationFinalScreenStyles.thanksForm}>
        <Text style={confirmationFinalScreenStyles.textStyle}>
          Спасибо за ваш заказ!
        </Text>
        <Text style={confirmationFinalScreenStyles.textStyle}>
          Номер вашего заказа:
        </Text>
        <Text style={confirmationFinalScreenStyles.textStyleLastString}>
          №{orderNumber} от {formatDate(currentDate)}
        </Text>
      </View>
      <View style={confirmationFinalScreenStyles.buttonWrapper}>
        <Button
          title="Мои заказы"
          titleStyle={confirmationFinalScreenStyles.titleRegisterBtn}
          disabled={false}
          buttonStyle={confirmationFinalScreenStyles.registerButton}
          onPress={() => {
            navigation.navigate("MyOrders");
          }}
        />
      </View>
    </View>
  );
};
