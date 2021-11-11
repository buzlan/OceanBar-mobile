import React from "react";

import { orderTypeScreen } from "../screens/OrderType/orderTypeScreen";

import { createStackNavigator } from "@react-navigation/stack";
import basketScreen from "../screens/TabsScreens/basketScreen";
import { reserveTableScreen } from "../screens/ReserveTableScreen/reserveTableScreen";
import { confirmationScreen } from "../screens/ConfirmationScreen/confirmationPage";

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
      fontWeight: "600",
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
    </Stack.Navigator>
  );
};
