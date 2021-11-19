import { StyleSheet } from "react-native";

export const reserveTableScreenStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  itemsContainer: {
    paddingHorizontal: 20,
    height: "100%",
  },
  selectDateWrapper: {
    paddingTop: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  dataElWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
  },
  dataText: {
    fontSize: 24,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "black",
    paddingLeft: 20,
  },
  selectTableWrapper: {
    paddingTop: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  selectTimeWrapper: {
    paddingTop: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 70,
  },
  textCheckboxStyle: {
    fontSize: 20,
    paddingLeft: 10,
  },
  buttonWrapper: {
    paddingTop: 60,
    paddingBottom: 20,
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
  registerButton: {
    alignContent: "center",
    backgroundColor: "#FF4D00",
    borderWidth: 1,
    borderColor: "#FF4D00",
    marginHorizontal: 20,
    height: 50,
  },
});
