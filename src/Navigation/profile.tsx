import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "react-native-paper";
import ProfileScreen from "../Screens/TabsScreens/profileScreen";
import EditProfileScreen from "../Screens/EditProfileScreen/editProfileScreen";
import { newAdressScreen } from "../Screens/ProfileOptionsScreens/newAdressScreen";
import setProfileAdressScreen from "../Screens/ProfileOptionsScreens/setProfileAdressScreen";
import MyAdressScreen from "../Screens/ProfileOptionsScreens/MyAdressScreen";
import changePasswordScreen from "../Screens/ChangePasswordScreen/changePasswordScreen";
import myOrdersScreen from "../Screens/MyOrdersScreen/myOrdersScreen";
import orderDetailsScreen from "../Screens/OrderScreenWithDetails/orderDetailsScreen";
import { View } from "react-native";

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
          headerStyle: { height: 70, backgroundColor: "white" },
          headerLeft: () => null,
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={"white"}
                color={colors.text}
                onPress={() => navigation.navigate("EditProfile")}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: "Редактировать профиль",
          headerStyle: { height: 70, backgroundColor: "transparent" },
        }}
        component={EditProfileScreen}
      />
      <ProfileStack.Screen
        name="NewAdress"
        options={{
          title: "Адрес доставки",
          headerStyle: { height: 70, backgroundColor: "transparent" },
        }}
        component={newAdressScreen}
      />
      <ProfileStack.Screen
        name="SetAdress"
        options={{
          title: "Новый адрес доставки",
          headerStyle: { height: 70, backgroundColor: "transparent" },
        }}
        component={setProfileAdressScreen}
      />
      <ProfileStack.Screen
        name="MyAdress"
        options={{
          title: "Адрес доставки",
          headerStyle: { height: 70, backgroundColor: "transparent" },
        }}
        component={MyAdressScreen}
      />
      <ProfileStack.Screen
        name="ChangePassword"
        options={{
          title: "Изменение пароля",
          headerStyle: { height: 70, backgroundColor: "transparent" },
        }}
        component={changePasswordScreen}
      />
      <ProfileStack.Screen
        name="MyOrders"
        options={{
          title: "Мои заказы",
          headerStyle: { height: 70, backgroundColor: "transparent" },
        }}
        component={myOrdersScreen}
      />
      <ProfileStack.Screen
        name="OrderDetails"
        options={{
          title: "Заказ",
          headerStyle: { height: 70, backgroundColor: "transparent" },
        }}
        component={orderDetailsScreen}
      />
    </ProfileStack.Navigator>
  );
};
