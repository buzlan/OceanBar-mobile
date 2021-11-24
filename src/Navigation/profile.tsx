import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "react-native-paper";
import { View } from "react-native-animatable";
import { ProfileScreen } from "../Screens/TabsScreens/profileScreen";
import { EditProfileScreen } from "../Screens/EditProfileScreen/editProfileScreen";

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          // shadowColor: colors.background, // iOS
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
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
