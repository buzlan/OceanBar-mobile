import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { myAdressScreenStyles } from "../../styles/myAdressScreenStyles";

const MyAdressScreen = ({ navigation, adress }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={myAdressScreenStyles.cityNameWrapper}>
        <Text style={myAdressScreenStyles.cityNameStyle}>г.Минск</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          paddingTop: 100,
        }}
      >
        <Text style={myAdressScreenStyles.cityNameStyle}>
          Улица: {adress.street}
        </Text>
        <Text style={myAdressScreenStyles.cityNameStyle}>
          Дом: {adress.house}
        </Text>
        <Text style={myAdressScreenStyles.cityNameStyle}>
          Корпус: {adress.corpus}
        </Text>
        <Text style={myAdressScreenStyles.cityNameStyle}>
          Квартира: {adress.flat}
        </Text>
      </View>
      <View style={myAdressScreenStyles.buttonWrapper}>
        <Button
          title="Изменить адрес доставки"
          titleStyle={myAdressScreenStyles.titleRegisterBtn}
          buttonStyle={myAdressScreenStyles.registerButton}
          onPress={() => {
            navigation.navigate("SetAdress");
          }}
        />
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    adress: state.Adress,
  };
};

export default connect(mapStateToProps, null)(MyAdressScreen);
