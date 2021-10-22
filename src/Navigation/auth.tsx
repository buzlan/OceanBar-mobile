import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationForm } from "../screens/RegistrationScreens/regForm";
import { LoginScreen } from "../screens/RegistrationScreens/loginScreen";
import { Button, Image } from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

const Stack = createStackNavigator();

export const AuthScreenNavigator = (navigation) => {
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
          // headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
