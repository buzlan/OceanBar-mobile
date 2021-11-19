import { StyleSheet } from "react-native";

export const confirmationFinalScreenStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 100,
  },
  thanksForm: {
    width: 270,
    height: 130,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 24,
  },
  textStyle: {
    paddingTop: 20,
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  textStyleLastString: {
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  buttonWrapper: {
    paddingTop: 60,
    paddingBottom: 20,
    height: "100%",
    justifyContent: "center",
  },
  titleRegisterBtn: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
  },
  registerButton: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#FF4D00",
    borderWidth: 1,
    borderColor: "#FF4D00",
    // marginHorizontal: 20,
    height: 50,
    width: "100%",
  },
});
