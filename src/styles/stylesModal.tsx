import { StyleSheet } from "react-native";

export const stylesModal = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  itemNameWrapper: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  itemName: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    fontFamily: "Roboto",
  },
  compositionWrapper: {
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  compositionTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
    fontFamily: "Roboto",
  },
  mainItemsWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 20,
  },
  itemsContainer: {
    flex: 0.6,
  },
  touchableOpacity: {
    flexDirection: "row",
    alignItems: "center",
  },
  ingredientsText: {
    fontWeight: "300",
    fontFamily: "Ubuntu",
    fontSize: 16,
    color: "black",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 150,
    paddingHorizontal: 30,
  },
  buttonStyle: {
    backgroundColor: "#FF4D00",
    margin: 20,
    height: 45,
    width: 100,
  },
  titleButton: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 14,
  },
});
