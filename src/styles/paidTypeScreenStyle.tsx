import { StyleSheet } from "react-native";

export const paidTypeScreenStyles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "column",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "white",
  },
  radioButtonWrapper: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 60,
  },
  touchOpWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textItem: { fontSize: 20 },
  buttonWrapper: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 180,
    paddingHorizontal: 40,
    paddingBottom: 20,
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
});
