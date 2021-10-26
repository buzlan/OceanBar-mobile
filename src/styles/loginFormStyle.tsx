import { StyleSheet } from "react-native";

export const stylesLoginForm = StyleSheet.create({
  regForm: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 20,
    color: "black",
  },
  textInput: {
    alignSelf: "stretch",
    height: 40,
  },
  textLogo: {
    backgroundColor: "white",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    paddingLeft: 20,
  },
  wrapperInput: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  emailInput: {
    backgroundColor: "white",
    borderColor: "black",
  },
  passwordWrapper: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  passwordInput: {
    backgroundColor: "white",
    borderColor: "black",
  },
  forgotWrapper: {
    alignItems: "flex-end",
    paddingRight: 20,
    paddingBottom: 20,
  },
  titleForgotBtn: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#FF4D00",
  },
  forgotBtn: {
    width: 120,
    backgroundColor: "transparent",
  },
  inputButton: {
    backgroundColor: "#FF4D00",
    margin: 20,
    height: 50,
  },
  titleInputBtn: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 14,
  },
  continueBtn: {
    alignContent: "center",
    backgroundColor: "FF4D00",
    borderWidth: 1,
    borderColor: "#FF4D00",
    marginHorizontal: 20,
    height: 50,
  },
  titleContinueBtn: {
    backgroundColor: "FF4D00",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 14,
  },
  registerButton: {
    alignContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FF4D00",
    marginHorizontal: 20,
    height: 50,
  },
  titleRegisterBtn: {
    backgroundColor: "transparent",
    color: "#FF4D00",
    fontFamily: "Roboto",
    fontSize: 14,
  },
});
