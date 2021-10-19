import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationForm } from "../screens/RegistrationScreens/regForm";
import { LoginScreen } from "../screens/RegistrationScreens/loginScreen";

const Stack = createStackNavigator();

export const AuthScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { height: 100 } }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "Авторизация",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationForm}
        options={{
          title: "Регистрация",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
