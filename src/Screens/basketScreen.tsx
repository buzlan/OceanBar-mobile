import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {ParamListBase} from '@react-navigation/routers';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {stylesBasket} from '../styles/basketStyle';

interface Props extends BottomTabScreenProps<ParamListBase> {}

export const BasketScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={stylesBasket.container}>
      <Text> BasketScreen!</Text>
      <Button
        title="Click me"
        onPress={() => {
          // alert('Button clicked');
        }}></Button>
    </View>
  );
};
