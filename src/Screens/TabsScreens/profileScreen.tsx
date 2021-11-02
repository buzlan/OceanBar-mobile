import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import { stylesProfile } from "../../styles/profileStyle";
interface Props extends BottomTabScreenProps<ParamListBase> {}

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={stylesProfile.container}>
      <Text> Profile Screen!</Text>
      <Button
        title="Click me"
        onPress={() => {
          // alert('Button clicked');
        }}
      ></Button>
    </View>
  );
};
