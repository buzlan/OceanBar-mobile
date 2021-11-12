import { StyleSheet } from "react-native";

export const stylesDishPage = StyleSheet.create({
  scrollStyle: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },

  wrapperDishElements: {
    backgroundColor: "white",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  leftColumnWrapper: {
    width: "70%",
  },
  compositionTitleText: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "black",
  },
  paddingTop10: {
    paddingTop: 10,
  },
  ingredientsText: {
    fontWeight: "300",
    fontFamily: "Ubuntu",
    fontSize: 16,
    color: "black",
  },
  changeTitleText: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#FF4D00",
  },
  caloriesWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  caloriesText: {
    fontWeight: "500",
    fontFamily: "Ubuntu",
    fontSize: 20,
    color: "black",
    paddingLeft: 8,
  },
  priceWrapper: {
    width: "100%",
    paddingTop: 60,
    alignItems: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  priceText: {
    fontSize: 40,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "black",
  },
  bynText: {
    paddingBottom: 5,
    paddingLeft: 5,
    fontWeight: "500",
    fontSize: 20,
    color: "black",
  },
  buttonWrapper: {
    paddingTop: 40,
    width: "100%",
  },
  titleInputBtn: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 14,
  },
  inputButton: {
    backgroundColor: "#FF4D00",
    margin: 20,
    height: 50,
  },
  image: {
    width: "100%",
    height: 265,
    borderRadius: 5,
  },
});
