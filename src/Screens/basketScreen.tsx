import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {ParamListBase} from '@react-navigation/routers';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

interface Props extends BottomTabScreenProps<ParamListBase> {}

export const BasketScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> BasketScreen!</Text>
      <Button
        title="Click me"
        onPress={() => {
          // alert('Button clicked');
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
