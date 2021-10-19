import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {stylesSearchBar} from '../../styles/searchBarStyle';

export const SearchBar = () => {
  const [isTextInputShow, setIsTextInputShow] = useState(false);
  return (
    <View style={stylesSearchBar.header}>
      <FAIcon
        name="search"
        size={20}
        style={stylesSearchBar.headerIcon}
        onPress={() => setIsTextInputShow(prev => !prev)}
      />
      {isTextInputShow && <TextInput style={stylesSearchBar.inputText} />}
    </View>
  );
};
