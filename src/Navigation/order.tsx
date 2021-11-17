import React from "react";

import { orderTypeScreen } from "../screens/OrderType/orderTypeScreen";

import { createStackNavigator } from "@react-navigation/stack";
import basketScreen from "../screens/TabsScreens/basketScreen";
import { reserveTableScreen } from "../screens/ReserveTableScreen/reserveTableScreen";
import { confirmationScreen } from "../screens/ConfirmationScreen/confirmationPage";
import { selectTableScreen } from "../screens/SelectTableScreen/selectTableScreen";
import { selectTimeScreen } from "../screens/SelectTimeScreen/selectTimeScreen";
import { orderTakeawayScreen } from "../screens/OrderTakeawayScreen/orderTakeawayScreen";
import { paidTypeScreen } from "../screens/PaidType/paidTypeScreen";
import { orderDeliveryScreen } from "../screens/OrderDelivery/orderDeliveryScreen";
import { adressDeliveryScreen } from "../screens/AdressDeliveryScreen/adressDeliveryScreen";

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
    </Stack.Navigator>
  );
};
