import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Unorderedlist from "react-native-unordered-list";

import { stylesDishPage } from "../../styles/dishPageStyle";
import { showMessage } from "react-native-flash-message";
import { addToCart } from "../../actions/cart";

const DishPage = ({ route, addItemToCart }) => {
  const item = route.params.dishDetails;
  return (
    <ScrollView style={stylesDishPage.scrollStyle}>
      <View style={stylesDishPage.container}>
        <Image
          source={{
            uri: item.imageURL,
          }}
          style={stylesDishPage.image}
        />
        <View style={stylesDishPage.wrapperDishElements}>
          <View style={stylesDishPage.leftColumnWrapper}>
            <Text style={stylesDishPage.compositionTitleText}>Состав</Text>
            {item.ingredients.split(";").map((ing, index) => {
              return (
                <View style={stylesDishPage.paddingTop10} key={index}>
                  <Unorderedlist
                    bulletUnicode={0x2022}
                    color={"black"}
                    style={{ fontSize: 15 }}
                  >
                    <Text style={stylesDishPage.ingredientsText}>{ing}</Text>
                  </Unorderedlist>
                </View>
              );
            })}
          </View>
          <TouchableOpacity>
            <Text style={stylesDishPage.changeTitleText}>Изменить</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDishPage.caloriesWrapper}>
          <FAIcon name={"fire"} size={20} />
          <Text style={stylesDishPage.caloriesText}>{item.calories}</Text>
        </View>
        <View style={stylesDishPage.priceWrapper}>
          <Text style={stylesDishPage.priceText}>{item.price}</Text>
          <Text style={stylesDishPage.bynText}>BYN</Text>
        </View>
        <View style={stylesDishPage.buttonWrapper}>
          <Button
            type="outline"
            title="Добавить в корзину"
            titleStyle={stylesDishPage.titleInputBtn}
            buttonStyle={stylesDishPage.inputButton}
            onPress={() => {
              addItemToCart(item);
              showMessage({
                message: `${item.name} добавлено в корзину`,
                style: {
                  paddingLeft: 80,
                },
                titleStyle: {
                  fontSize: 15,
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                },
                icon: {
                  icon: "success",
                  position: "right",
                },
                type: "success",
              });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    addItemToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(DishPage);
