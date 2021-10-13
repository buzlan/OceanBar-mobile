import {StyleSheet} from 'react-native';

export const stylesDishPage = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dishDescription: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  composition: {
    width: 200,
  },
  button: {
    paddingTop: 60,
    color: 'black',
  },
});
