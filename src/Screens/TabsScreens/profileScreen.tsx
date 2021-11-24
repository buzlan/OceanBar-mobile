import React from "react";
import { View, SafeAreaView } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { stylesProfile } from "../../styles/profileStyle";

export const ProfileScreen = () => {
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
              Игорь Бузланов
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
            +375(44)546-06-93
          </Text>
        </View>
        <View style={stylesProfile.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            igorbuzlanov44@gmail.com
          </Text>
        </View>
      </View>

      <View style={stylesProfile.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={stylesProfile.menuItem}>
            <Icon name="map-marker-circle" color="#FF6347" size={25} />
            <Text style={stylesProfile.menuItemText}>Адрес доставки</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={stylesProfile.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={stylesProfile.menuItemText}>Банковские карты</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={stylesProfile.menuItem}>
            <Icon name="cart" color="#FF6347" size={25} />
            <Text style={stylesProfile.menuItemText}>Мои заказы</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={stylesProfile.menuItem}>
            <Icon name="cog" color="#FF6347" size={25} />
            <Text style={stylesProfile.menuItemText}>Настройки</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
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
