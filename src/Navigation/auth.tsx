import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationForm } from "../Screens/RegistrationScreens/regForm";
import { LoginScreen } from "../Screens/RegistrationScreens/loginScreen";
import { Image } from "react-native";

const Stack = createStackNavigator();

export const AuthScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 200 },
        headerTitleAlign: "left",
        headerBackImage: () => (
          <Image source={require("../assets/img/backArrow.png")} />
        ),
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "Ocean bar",
          headerTitleStyle: {
            fontFamily: "RegattiaStencil-Bold",
            fontSize: 32,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationForm}
        options={{
          title: "Регистрация",
          headerStyle: { height: 100 },
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};
