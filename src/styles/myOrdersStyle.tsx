import { StyleSheet } from "react-native";

export const myOrdersStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  buttonWrapper: {
    paddingTop: 30,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 60,
  },
  registerButton: {
    alignContent: "center",
    backgroundColor: "#FF4D00",
    borderWidth: 1,
    borderColor: "#FF4D00",
    height: 40,
    width: 130,
    borderRadius: 20,
  },
  registerButtonNotSelected: {
    alignContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#FF4D00",
    height: 40,
    width: 130,
    borderRadius: 20,
  },
  titleRegisterBtn: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "700",
  },
  titleRegisterBtnNotSelected: {
    backgroundColor: "transparent",
    color: "black",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "700",
  },
});
