import { StyleSheet } from "react-native";

export const numberInCircleStyles = StyleSheet.create({
  mainWrapper: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#FF4D00",
    backgroundColor: "#FF4D00",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  textStyle: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
});
