/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "react-native-elements";
import { stylesApp } from "./styles/appStyle";
import { MainNavigator } from "./navigation/main";
import { AppLoader } from "./components/AppLoader";
import { SafeAreaView } from "react-native-safe-area-context";

const theme = {
  Button: {
    titleStyle: {
      color: "black",
    },
  },
};

export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={stylesApp.container}>
          <MainNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
};
