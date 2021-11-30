import { StyleSheet } from "react-native";

export const newAdressScreenStyles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 80,
    alignContent: "center",
    paddingTop: 100,
  },
  textStyle: {
    fontFamily: "Overlock-Italic",
    fontSize: 24,
  },
  imageWrapper: {
    flexDirection: "row",
    width: "80%",
    paddingTop: 50,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 50,
  },
  registerButton: {
    alignContent: "center",
    backgroundColor: "#FF4D00",
    borderWidth: 1,
    borderColor: "#FF4D00",
    height: 50,
    width: "100%",
  },
  titleRegisterBtn: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
  },
});
