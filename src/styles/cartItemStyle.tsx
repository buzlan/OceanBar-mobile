import { StyleSheet } from "react-native";
import { deviceWidth } from "../components/CartItems";

export const cartItemStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  height20: {
    height: 20,
  },
  height10: {
    height: 10,
  },
  title: {
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  itemContainerBtn: { backgroundColor: "transparent", flex: 1 },
  items: {
    width: deviceWidth - 40,
    flexDirection: "row",
    borderBottomWidth: 2,
    margin: 10,
    borderColor: "#FF4D00",
    paddingBottom: 10,
  },
  imageStyle: {
    width: deviceWidth / 3,
    height: deviceWidth / 3,
  },
  textItemsContainer: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  priceAndIconsContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceItem: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FF4D00",
  },
  iconsContainer: { flexDirection: "row", alignItems: "center" },
  countItems: {
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  nextBtnContainer: {
    backgroundColor: "#FF4D00",
    width: 100,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  nextBtn: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "white",
  },
});
