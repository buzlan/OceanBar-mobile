import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { stylesSearchBar } from "../styles/searchBarStyle";

export const SearchClick = ({ props }) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("SearchScreen")}>
      <Image
        source={require("../assets/img/akar-icons_search.png")}
        style={stylesSearchBar.headerIcon}
      />
    </TouchableOpacity>
  );
};
