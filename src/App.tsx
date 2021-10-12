/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import {Tabs} from './navigation/tabs';
import {ThemeProvider} from 'react-native-elements';

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
      <View style={{backgroundColor: 'red', display: 'flex', flex: 1}}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
};
