import React from "react";

import { orderTypeScreen } from "../screens/OrderType/orderTypeScreen";

import { createStackNavigator } from "@react-navigation/stack";
import basketScreen from "../screens/TabsScreens/basketScreen";
import { reserveTableScreen } from "../screens/ReserveTableScreen/reserveTableScreen";
import { confirmationScreen } from "../screens/ConfirmationScreen/confirmationPage";

const Stack = createStackNavigator();

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
        options={{
          title: "Выберите тип заказа",
          headerTitleAlign: "left",
          headerStyle: { height: 70, backgroundColor: "transparent" },
          headerLeftContainerStyle: {
            alignItems: "flex-end",
          },
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "600",
          },
        }}
      />
      <Stack.Screen
        name="ReserveTable"
        component={reserveTableScreen}
        options={{
          title: "Бронирование стола",
          headerTitleAlign: "left",
          headerStyle: { height: 70, backgroundColor: "transparent" },
          headerLeftContainerStyle: {
            alignItems: "flex-end",
          },
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "600",
          },
        }}
      />
      <Stack.Screen
        name="Confirmation"
        component={confirmationScreen}
        options={{
          title: "Подтверждение заказа",
          headerTitleAlign: "left",
          headerStyle: { height: 70, backgroundColor: "transparent" },
          headerLeftContainerStyle: {
            alignItems: "flex-end",
          },
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "600",
          },
        }}
      />
    </Stack.Navigator>
  );
};
