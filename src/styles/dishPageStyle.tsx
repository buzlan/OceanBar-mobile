import { StyleSheet } from "react-native";

export const stylesDishPage = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  dishDescription: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  composition: {
    width: 200,
  },
  button: {
    paddingTop: 60,
    color: "black",
  },
  image: {
    width: "100%",
    height: 265,
    borderRadius: 5,
  },
});
