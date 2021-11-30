import React from "react";

import { orderTypeScreen } from "../Screens/OrderType/orderTypeScreen";

import { createStackNavigator } from "@react-navigation/stack";
import basketScreen from "../Screens/TabsScreens/basketScreen";
import { reserveTableScreen } from "../Screens/ReserveTableScreen/reserveTableScreen";
import confirmationScreen from "../Screens/ConfirmationScreen/confirmationPage";
import { selectTableScreen } from "../Screens/SelectTableScreen/selectTableScreen";
import { selectTimeScreen } from "../Screens/SelectTimeScreen/selectTimeScreen";
import { orderTakeawayScreen } from "../Screens/OrderTakeawayScreen/orderTakeawayScreen";
import { paidTypeScreen } from "../Screens/PaidType/paidTypeScreen";
import { orderDeliveryScreen } from "../Screens/OrderDelivery/orderDeliveryScreen";
import { adressDeliveryScreen } from "../Screens/AdressDeliveryScreen/adressDeliveryScreen";
import { confirmationFinalScreen } from "../Screens/ConfirmationResultScreen/confirmationFinalScreen";

const Stack = createStackNavigator();

const setOptions = (title) => {
  return {
    title: title,
    headerTitleAlign: "left",
    headerStyle: { height: 70, backgroundColor: "transparent" },
    headerLeftContainerStyle: {
      alignItems: "flex-end",
    },
    headerTitleStyle: {
      fontSize: 20,
      fontFamily: "Roboto",
      fontWeight: "700",
    },
  };
};

export const CartNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Basket"
        component={basketScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TypeOrder"
        component={orderTypeScreen}
        options={() => setOptions("Выберете тип заказа")}
      />
      <Stack.Screen
        name="ReserveTable"
        component={reserveTableScreen}
        options={() => setOptions("Бронирование стола")}
      />
      <Stack.Screen
        name="Confirmation"
        component={confirmationScreen}
        options={() => setOptions("Подтверждение заказа")}
      />
      <Stack.Screen
        name="SelectTable"
        component={selectTableScreen}
        options={() => setOptions("Выберите стол")}
      />
      <Stack.Screen
        name="SelectTime"
        component={selectTimeScreen}
        options={() => setOptions("Выберите время")}
      />
      <Stack.Screen
        name="OrderTakeaway"
        component={orderTakeawayScreen}
        options={() => setOptions("Навынос")}
      />
      <Stack.Screen
        name="PaidType"
        component={paidTypeScreen}
        options={() => setOptions("Тип оплаты")}
      />
      <Stack.Screen
        name="OrderDelivery"
        component={orderDeliveryScreen}
        options={() => setOptions("Доставка заказа")}
      />
      <Stack.Screen
        name="AdressDelivery"
        component={adressDeliveryScreen}
        options={() => setOptions("Адрес доставки")}
      />
      <Stack.Screen
        name="ConfirmationFinal"
        component={confirmationFinalScreen}
        options={() => setOptions("Подтверждение заказа")}
      />
    </Stack.Navigator>
  );
};
