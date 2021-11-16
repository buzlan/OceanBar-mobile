import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import uuid from "uuid";

import { selectTimeScreenStyles } from "../../styles/selectTimeScreenStyles";

const Item = ({ value, onValueChange }) => (
  <View style={selectTimeScreenStyles.itemWrapper}>
    <TouchableOpacity
      style={selectTimeScreenStyles.touchOpItemWrapper}
      onPress={() => onValueChange(value)}
    >
      <Text style={selectTimeScreenStyles.textItem}>{value}</Text>
    </TouchableOpacity>
  </View>
);
const data = [
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
];

export const selectTimeScreen = ({ navigation, route }) => {
  const [value, setValue] = useState(data[0]);
  const renderItem = ({ item }) => (
    <Item value={item} onValueChange={setValue} />
  );
  return (
    <SafeAreaView style={selectTimeScreenStyles.mainWrapper}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={() => uuid.v4()}
      />
      <View style={selectTimeScreenStyles.buttonWrapper}>
        <Button
          title={`В  ${value}`}
          titleStyle={selectTimeScreenStyles.titleRegisterBtn}
          buttonStyle={selectTimeScreenStyles.registerButton}
          onPress={() => {
            const obj = {
              reserve: () =>
                navigation.navigate("ReserveTable", { time: value }),
              takeaway: () =>
                navigation.navigate("OrderTakeaway", { time: value }),
              default: () => {},
            };
            const navFunc = obj[route.params?.orderType] || obj.default;
            navFunc();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
