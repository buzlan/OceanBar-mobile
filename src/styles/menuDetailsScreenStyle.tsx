import {StyleSheet} from 'react-native';

export const stylesMenuDetail = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dishItem: {
    padding: 10,
  },
  dishTitle: {
    fontWeight: '900',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  dishDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});
