import React from "react";
import { View, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { stylesProfile } from "../../styles/profileStyle";

const ProfileScreen = ({ navigation, userInfo, creditCards }) => {
  console.log("USERINFRO", userInfo);
  return (
    <SafeAreaView style={stylesProfile.container}>
      <View style={stylesProfile.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={require("../../assets/img/user2.jpg")}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                stylesProfile.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {`${userInfo.name} ${userInfo.secondname}`}
            </Title>
            <Caption style={stylesProfile.caption}>@buzlik</Caption>
          </View>
        </View>
      </View>

      <View style={stylesProfile.userInfoSection}>
        <View style={stylesProfile.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Minsk, Belarus
          </Text>
        </View>
        <View style={stylesProfile.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {userInfo.phone}
          </Text>
        </View>
        <View style={stylesProfile.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {userInfo.email}
          </Text>
        </View>
      </View>

      <View style={stylesProfile.menuWrapper}>
        <TouchableRipple
          onPress={() => {
            userInfo.street !== null
              ? navigation.navigate("MyAdress")
              : navigation.navigate("NewAdress");
          }}
        >
          <View style={stylesProfile.menuItem}>
            <Icon name="map-marker-circle" color="#FF6347" size={25} />
            <Text style={stylesProfile.menuItemText}>Адрес доставки</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            creditCards.length > 0
              ? navigation.navigate("MyCards")
              : navigation.navigate("EmptyCard");
          }}
        >
          <View style={stylesProfile.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={stylesProfile.menuItemText}>Банковские карты</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate("MyOrders");
          }}
        >
          <View style={stylesProfile.menuItem}>
            <Icon name="cart" color="#FF6347" size={25} />
            <Text style={stylesProfile.menuItemText}>Мои заказы</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={async () => {
            try {
              // const response = await AuthService.logout();
              // console.log("RESPONSELOGOUT", response.data);
              await AsyncStorage.removeItem("token"); //IF I REMOVE TOKEN NOTHING HAPPEN
              navigation.navigate("LoginScreen"); //its temp fix
            } catch (err) {
              console.log("ERROR", err);
            }
          }}
        >
          <View style={stylesProfile.menuItem}>
            <Icon
              name="logout"
              color="#FF6347"
              size={25}
              style={{ transform: [{ scaleX: -1 }] }}
            />
            <Text style={stylesProfile.menuItemText}>Выйти</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    userInfo: state.UserData,
    creditCards: state.CardStore.creditCards,
  };
};

export default connect(mapStateToProps, null)(ProfileScreen);
