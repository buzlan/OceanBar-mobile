import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/routers';

interface Props extends BottomTabScreenProps<ParamListBase>  {

}

const DishesScreen : React.FC<Props>= ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Dishes Screen!</Text>
      <Button
        title="Click me"
        onPress={() => {
          // alert('Button clicked');
        }}></Button>
    </View>
  );
};

export default DishesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
