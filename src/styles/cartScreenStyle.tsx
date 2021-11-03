import { StyleSheet } from "react-native";

export const cartScreenStyle = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  headerWrapper: {
    width: "100%",
    alignItems: "center",
    height: 70,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  trashIconWrapper: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  title: {
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "black",
  },
  itemsContainer: {
    height: 200,
    width: "100%",
  },
  mainBottomWrapper: {
    display: "flex",
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 5,
  },
  bottomPanelWrapper: {
    height: 70,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  bottomPanelItemsWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
  totalSumTitle: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "400",
    color: "black",
  },
});
