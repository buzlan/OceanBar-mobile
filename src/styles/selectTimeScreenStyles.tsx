import { StyleSheet } from "react-native";

export const selectTimeScreenStyles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchOpItemWrapper: {
    width: "100%",
    paddingTop: 30,
  },
  textItem: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  registerButton: {
    alignContent: "center",
    backgroundColor: "#FF4D00",
    borderWidth: 1,
    borderColor: "#FF4D00",
    marginHorizontal: 20,
    height: 50,
  },
  titleRegisterBtn: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
  },
  mainWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonWrapper: {
    paddingBottom: 10,
  },
});
