import { StyleSheet } from "react-native";

export const stylesSearchBar = StyleSheet.create({
  header: {
    position: "relative",
    justifyContent: "center",
    top: 0,
    height: 50,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  headerIcon: {
    position: "absolute",
    right: 10,
    top: 10,
    height: 22,
    width: 22,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 50,
  },
});
