import { StyleSheet } from "react-native";

export const stylesRegForm = StyleSheet.create({
  regForm: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "white",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    color: "black",
  },
  textInput: {
    alignSelf: "stretch",
    height: 40,
    margin: 10,
  },
  errors: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
  },
});
