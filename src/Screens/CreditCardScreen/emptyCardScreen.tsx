import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-elements";

import { newAdressScreenStyles } from "../../styles/newAdressScreenStyles";

export const emptyCardScreen = ({ navigation }) => {
  return (
    <View style={newAdressScreenStyles.mainWrapper}>
      <View>
        <Text style={newAdressScreenStyles.textStyle}>У вас пока нет</Text>
      </View>
      <View>
        <Text style={newAdressScreenStyles.textStyle}>прикреплённых карт</Text>
      </View>

      <View style={newAdressScreenStyles.imageWrapper}>
        <Image source={require("../../assets/img/redCard.png")} />
        <Image source={require("../../assets/img/blueCard.png")} />
      </View>
      <View style={newAdressScreenStyles.buttonWrapper}>
        <Button
          title="Добавить карту"
          titleStyle={newAdressScreenStyles.titleRegisterBtn}
          buttonStyle={newAdressScreenStyles.registerButton}
          onPress={() => {
            navigation.navigate("SetCard");
          }}
        />
      </View>
    </View>
  );
};
