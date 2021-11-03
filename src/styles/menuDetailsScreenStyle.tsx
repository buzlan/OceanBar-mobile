import { StyleSheet } from "react-native";

export const stylesMenuDetail = StyleSheet.create({
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
