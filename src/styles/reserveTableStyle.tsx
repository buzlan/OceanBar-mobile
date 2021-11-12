import { StyleSheet } from "react-native";

export const reserveTableStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  dataWrapper: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 25,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 40,
  },
  dataElWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  dataText: {
    fontSize: 24,
    paddingLeft: 10,
    paddingTop: 4,
    fontWeight: "400",
    fontFamily: "Roboto",
  },
  reserveTableWrapper: {
    paddingTop: 30,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  reserveTableText: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    paddingRight: 5,
  },
  paddingT30: {
    paddingTop: 30,
  },
  timeWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 40,
  },
  timeText: {
    fontSize: 24,
    paddingLeft: 10,
    paddingTop: 4,
    fontWeight: "400",
    fontFamily: "Roboto",
  },
  checkboxWrapper: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10,
    height: 250,
  },
  paddingB3: {
    paddingBottom: 3,
  },
  nextBtnWrapper: {
    alignItems: "center",
    paddingTop: 30,
  },
  textBtnWrapper: {
    backgroundColor: "#FF4D00",
    width: 100,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  textBtnWrapperDisabled: {
    backgroundColor: "grey",
    width: 100,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  textBtn: {
    color: "white",
    fontWeight: "500",
  },
});
