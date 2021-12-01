import { StyleSheet } from "react-native";

export const myAdressScreenStyles = StyleSheet.create({
  mainSafeAreaViewWrapper: {
    backgroundColor: "white",
    flex: 1,
  },
  textInputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  adressDeliveryTextWrapper: {
    alignItems: "center",
    paddingTop: 15,
  },
  adressDeliveryTextStyle: {
    fontSize: 24,
    fontFamily: "MacondoSwashCaps",
  },
  cityNameWrapper: {
    alignItems: "center",
    paddingTop: 30,
  },
  cityNameStyle: {
    paddingTop: 10,
    fontSize: 18,
    fontFamily: "MacondoSwashCaps",
  },
  formikWrapper: {
    paddingTop: 30,
  },
  searchItemsScrollWrapper: {
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    left: 10,
  },
  itemSearchWrapper: {
    alignItems: "center",
  },
  itemTextStyle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "600",
  },
  buttonWrapper: { paddingVertical: 20, paddingTop: 220 },
  checkboxWrapper: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textCheckboxStyle: {
    fontSize: 20,
    paddingLeft: 10,
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
    fontSize: 18,
    fontWeight: "700",
  },
  disabledRegisterButton: {
    alignContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FF4D00",
    marginHorizontal: 20,
    height: 50,
  },
  disabledTitleRegisterBtn: {
    backgroundColor: "transparent",
    color: "#FF4D00",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
  },
});
