import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export const SearchBar = () => {
  const [isTextInputShow, setIsTextInputShow] = useState(false);
  return (
    <View style={styles.header}>
      <FAIcon
        name="search"
        size={20}
        style={styles.headerIcon}
        onPress={() => setIsTextInputShow(prev => !prev)}
      />
      {isTextInputShow && <TextInput style={styles.inputText} />}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    position: 'relative',
    justifyContent: 'center',
    top: 0,
    //width: '100%',
    height: 50,
    backgroundColor: 'green',
    flexDirection: 'row',
  },

  headerTitle: {
    paddingTop: 10,
    color: 'black',
    fontFamily: 'Dosis',
    fontSize: 30,
  },

  headerIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 22,
    width: 22,
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 50,
  },
});
