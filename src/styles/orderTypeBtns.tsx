import { StyleSheet } from "react-native";

export const orderTypeBtnsStyles = StyleSheet.create({
  mainWrapper: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 14,
    backgroundColor: "white",
  },
  titleOrderTypeBtn: {
    backgroundColor: "transparent",
    color: "#FF4D00",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "300",
  },
  buttonStyle: {
    alignContent: "center",
    backgroundColor: "transparent",
    marginHorizontal: 20,
    height: 50,
    width: 300,
    fontWeight: "700",
  },
});
