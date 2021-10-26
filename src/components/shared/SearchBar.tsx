import React, { useState } from "react";
import { Image, TouchableHighlight, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { stylesSearchBar } from "../../styles/searchBarStyle";

export const SearchBar = () => {
  const [isTextInputShow, setIsTextInputShow] = useState(false);
  return (
    <View style={stylesSearchBar.header}>
      <TouchableHighlight onPress={() => setIsTextInputShow((prev) => !prev)}>
        <Image
          source={require("../../assets/img/akar-icons_search.png")}
          style={stylesSearchBar.headerIcon}
        />
      </TouchableHighlight>
      {isTextInputShow && <TextInput style={stylesSearchBar.inputText} />}
    </View>
  );
};
