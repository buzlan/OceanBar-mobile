/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "react-native-elements";
import { stylesApp } from "./styles/appStyle";
import { MainNavigator } from "./navigation/main";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./services/store/store";
import FlashMessage from "react-native-flash-message";

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <SafeAreaView style={stylesApp.container}>
            <View style={{ flex: 1 }}>
              <MainNavigator />
              <FlashMessage position="top" />
            </View>
          </SafeAreaView>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};
