import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
interface Props extends BottomTabScreenProps<ParamListBase>  {

}

const ProfileScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Profile Screen!</Text>
      <Button
        title="Click me"
        onPress={() => {
          // alert('Button clicked');
        }}></Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
