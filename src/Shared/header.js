import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  const openSearch = () => {};
  const [isTextInputShow, setIsTextInputShow] = useState(false);
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => setIsTextInputShow(prev => !prev)}
        style={styles.headerIcon}>
        <FAIcon name="search" size={20} />
      </TouchableOpacity>
      {isTextInputShow && <TextInput />}
      <View>
        <Text style={styles.headerTitle}>Меню</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    position: 'relative',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
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
    zIndex: 9999,
    backgroundColor: 'red',
    height: 22,
    width: 22,
  },
});
