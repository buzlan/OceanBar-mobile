import { StyleSheet } from "react-native";

export const stylesMenuDetail = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  elementsWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableOpacityWrapper: {
    width: "100%",
    paddingHorizontal: 20,
  },
  imageStyle: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  bynTextStyle: {
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "black",
  },
  weightText: {
    fontFamily: "Roboto",
    fontWeight: "200",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  dishItem: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  dishTitle: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
    color: "black",
    fontFamily: "Roboto",
  },
  dishDescription: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});
