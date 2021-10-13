/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'react-native-elements';
import {Tabs} from './navigation/tabs';
import {stylesApp} from './styles/appStyle';

const theme = {
  Button: {
    titleStyle: {
      color: 'black',
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
      <View style={stylesApp.container}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
};
