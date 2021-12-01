import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import FAIcon from "react-native-vector-icons/FontAwesome";

import { removeAdress } from "../../actions/user";
import { AuthService } from "../../services/http/AuthService";
import { cartScreenStyle } from "../../styles/cartScreenStyle";
import { myAdressScreenStyles } from "../../styles/myAdressScreenStyles";

const MyAdressScreen = ({ navigation, userInfo, removeAdress }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={myAdressScreenStyles.cityNameWrapper}>
        <Text style={myAdressScreenStyles.cityNameStyle}>г.Минск</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            paddingTop: 80,
            paddingLeft: 20,
          }}
        >
          <Text style={myAdressScreenStyles.cityNameStyle}>
            Улица: {userInfo.street}
          </Text>
          <Text style={myAdressScreenStyles.cityNameStyle}>
            Дом: {userInfo.homeNumber}
          </Text>
          <Text style={myAdressScreenStyles.cityNameStyle}>
            Корпус: {userInfo.homePart}
          </Text>
          <Text style={myAdressScreenStyles.cityNameStyle}>
            Квартира: {userInfo.flat}
          </Text>
        </View>
        <View style={{ paddingTop: 70, paddingRight: 30 }}>
          <TouchableOpacity
            onPress={async () => {
              try {
                const response = await AuthService.updateAdress(
                  "",
                  "",
                  "",
                  "",
                  userInfo.id
                );
                removeAdress();
                navigation.navigate("NewAdress");
              } catch (err) {
                console.log(err);
              }
              // navigation.navigate("MyAdress");
            }}
          >
            <FAIcon name={"trash"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
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
    userInfo: state.UserData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAdress: () => dispatch(removeAdress()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyAdressScreen);
