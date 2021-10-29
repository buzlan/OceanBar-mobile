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
    marginRight: 10,
    height: 25,
    width: 25,
    resizeMode: "cover",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginRight: 60,
    margin: 10,
    width: 200,
  },
});
