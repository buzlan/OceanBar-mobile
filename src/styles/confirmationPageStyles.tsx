import { StyleSheet } from "react-native";
import { deviceWidth } from "../components/CartItemsScreen";

export const confirmationPageStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewStyle: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: "row",

    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 45,
  },
  imageWithCountStyles: {
    alignItems: "center",
  },
  imageStyle: {
    width: deviceWidth / 2.7,
    height: deviceWidth / 3.5,
  },
  quantityContainer: {
    paddingTop: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  quantityItem: {
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 8,
    color: "black",
  },
  textItemsContainer: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "MacondoSwashCaps-Regular",
    color: "black",
  },
  excludedIngWrapper: {
    flexDirection: "column",
  },
  withoutIngText: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    fontFamily: "MacondoSwashCaps-Regular",
  },
  ingTextWrapper: {
    fontSize: 13,
    fontWeight: "400",
    color: "black",
    fontFamily: "MacondoSwashCaps-Regular",
  },
  priceAndIconsContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  priceItem: {
    fontWeight: "700",
    fontSize: 18,
    color: "black",
    paddingLeft: 5,
  },
  priceItem2: {
    fontWeight: "400",
    fontSize: 18,
    color: "black",
    paddingLeft: 5,
  },
  dropDownPickerStyle: {
    height: 40,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 250,
  },
  dropDownTextStyle: {
    fontSize: 20,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "400",
  },
  dropDownLabelStyle: {
    color: "black",
    width: 250,
  },
  dropDownContainerStyle: { width: 250 },
  dropDownPlaceholderStyle: {
    color: "black",
    width: 250,
  },
  firstPartTextStyle: {
    fontSize: 20,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "800",
    paddingTop: 10,
  },
  firstPartTextContactStyle: {
    fontSize: 20,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "800",
    paddingTop: 10,
  },
  firstPartTextStyleResult: {
    fontSize: 25,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "800",
    paddingTop: 10,
  },
  secondPartTextStyle: {
    fontSize: 18,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "600",
    paddingTop: 15,
    paddingLeft: 5,
  },
  secondPartTextContactStyle: {
    fontSize: 18,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "600",
    paddingTop: 15,
    paddingLeft: 5,
  },
  secondPartTextStyleResult: {
    fontSize: 25,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "600",
    paddingTop: 10,
    paddingLeft: 5,
  },
  itemsWrapperContainer: {
    alignItems: "center",
    paddingTop: 15,
  },
  itemWrapperStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactInformationStyleWrapper: {
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "center",
  },
  lineView: {
    borderBottomWidth: 0.5,
    alignItems: "center",
    alignContent: "center",
    height: 40,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  paidWrapper: {
    alignItems: "flex-start",
    paddingLeft: 20,
    flexDirection: "row",
    paddingTop: 40,
  },
  paidFirstText: {
    fontSize: 20,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "700",
    paddingTop: 10,
  },
  paidSecondText: {
    fontSize: 20,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "700",
  },
  paidSecondTextNotOnline: {
    fontSize: 20,
    fontFamily: "MacondoSwashCaps-Regular",
    fontWeight: "700",
    paddingTop: 10,
    paddingLeft: 7,
  },
  paidTypeNotOnlineWrapper: {
    flexDirection: "row",
    left: 50,
  },
  dropDownWrapper: {
    paddingLeft: 20,
    paddingTop: 20,
  },
});
