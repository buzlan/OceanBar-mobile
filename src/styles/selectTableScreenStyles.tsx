import { StyleSheet } from "react-native";

export const selectTableStyles = StyleSheet.create({
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
    fontSize: 14,
  },
  selectTableWrapper: {
    paddingTop: 40,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 70,
    backgroundColor: "white",
  },
  selectTableText: {
    fontSize: 24,
    fontWeight: "400",
    fontFamily: "Roboto",
  },
  dropDownPickerStyle: {
    height: 30,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dropDownTextStyle: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  dropDownLabelStyle: {
    color: "#FF4D00",
    flex: 0,
  },
  dropDownContainerStyle: {
    width: 180,
  },
  dropDownPlaceholderStyle: {
    color: "#FF4D00",
    flex: 0,
  },
  buttonWrapper: {
    width: "100%",
    height: "80%",
    justifyContent: "flex-end",
  },
});
