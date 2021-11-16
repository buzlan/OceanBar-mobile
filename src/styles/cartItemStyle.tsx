import { StyleSheet } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/colors";
import { deviceWidth } from "../components/CartItemsScreen";

export const cartItemStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    paddingBottom: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "black",
  },

  imageStyle: {
    width: deviceWidth / 3,
    height: deviceWidth / 3,
    borderRadius: 100,
  },
  textItemsContainer: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "black",
  },
  changeIngredientsBtnTitle: {
    marginTop: 25,
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "#FF4D00",
  },
  priceAndIconsContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceItem: {
    fontWeight: "400",
    fontSize: 20,
    color: "black",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityItem: {
    fontWeight: "400",
    paddingHorizontal: 8,
    color: "black",
  },
  nextBtn: {
    color: "white",
    fontWeight: "500",
  },
  excludedIngWrapper: {
    flexDirection: "column",
  },
  withoutIngText: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    fontFamily: "Roboto",
  },
  ingTextWrapper: {
    fontSize: 13,
    fontWeight: "400",
    color: "black",
    fontFamily: "Roboto",
  },
});
