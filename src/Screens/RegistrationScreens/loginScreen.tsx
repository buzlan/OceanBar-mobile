import React from 'react';
import {TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import {stylesLoginForm} from '../../styles/loginFormStyle';

export const LoginScreen = ({navigation}) => {
  return (
    <View style={stylesLoginForm.regForm}>
      <TextInput
        style={stylesLoginForm.textInput}
        placeholder={'Электронная почта'}
        underlineColorAndroid={'black'}
      />
      <TextInput
        style={stylesLoginForm.textInput}
        placeholder={'Пароль'}
        underlineColorAndroid={'black'}
      />
      <Button title="Войти" />
      <Button
        title="Зарегестрироваться"
        onPress={() => {
          navigation.navigate('auth', {screen: 'RegistrationScreen'});
        }}
      />
      <Button title="Забыл пароль" />
    </View>
  );
};
