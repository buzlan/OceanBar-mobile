import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { removeCardItem } from "../../actions/creditCard";

const myCardsScreen = ({ creditCards, navigation, removeCard }) => {
  useEffect(() => {
    if (creditCards.length === 0) {
      navigation.navigate("EmptyCard");
    }
  }, [creditCards]);
  return creditCards.length > 0 ? (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {creditCards?.map((item) => (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 30,
          }}
          key={item.cardNumber}
        >
          <View style={{ paddingLeft: 20 }}>
            <Image source={require("../../assets/img/masterCardLogo.png")} />
          </View>
          <TouchableOpacity>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  fontFamily: "Roboto",
                  color: "black",
                  paddingLeft: 20,
                }}
              >
                MasterCard {item.cardNumber.substring(12, 16)}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  fontFamily: "Roboto",
                  color: "black",
                  paddingLeft: 20,
                }}
              >
                {item.validity}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ paddingLeft: 30 }}>
            <FAIcon name={"chevron-right"} size={30} color={"black"} />
          </View>
          <View style={{ paddingLeft: 90 }}>
            <TouchableOpacity
              onPress={() => {
                removeCard(item.cardNumber);
              }}
            >
              <FAIcon name={"trash"} size={30} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  ) : null;
};
const mapStateToProps = (state) => {
  return {
    creditCards: state.CardStore.creditCards,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    removeCard: (number) => dispatch(removeCardItem(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(myCardsScreen);
