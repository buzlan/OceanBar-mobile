import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-elements";

import { newAdressScreenStyles } from "../../styles/newAdressScreenStyles";

export const newAdressScreen = ({ navigation }) => {
  return (
    <View style={newAdressScreenStyles.mainWrapper}>
      <View>
        <Text style={newAdressScreenStyles.textStyle}>У вас пока нет</Text>
      </View>
      <View>
        <Text style={newAdressScreenStyles.textStyle}>добавленного адреса</Text>
      </View>

      <View style={newAdressScreenStyles.imageWrapper}>
        <Image source={require("../../assets/img/houseLeft.png")} />
        <Image source={require("../../assets/img/houseRight.png")} />
      </View>
      <View style={newAdressScreenStyles.buttonWrapper}>
        <Button
          title="Добавить адрес доставки"
          titleStyle={newAdressScreenStyles.titleRegisterBtn}
          buttonStyle={newAdressScreenStyles.registerButton}
          onPress={() => {
            navigation.navigate("SetAdress");
          }}
        />
      </View>
    </View>
  );
};
