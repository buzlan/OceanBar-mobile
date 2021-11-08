import React from "react";
import { Text, View } from "react-native";
import { stylesDishPage } from "../styles/dishPageStyle";
import Unorderedlist from "react-native-unordered-list";

export const Composition = ({ ing }) => {
  return (
    <View style={stylesDishPage.paddingTop10}>
      <Unorderedlist
        bulletUnicode={0x2022}
        color={"black"}
        style={{ fontSize: 15 }}
      >
        <Text style={stylesDishPage.ingredientsText}>{ing}</Text>
      </Unorderedlist>
    </View>
  );
};
