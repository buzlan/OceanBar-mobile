import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { stylesDishPage } from "../../styles/dishPageStyle";
import { showMessage, hideMessage } from "react-native-flash-message";
import { connect } from "react-redux";

const DishPage = ({ route, addItemToCart }) => {
  const item = route.params.dishDetails;
  console.log("ITEM", item);

  return (
    <View style={stylesDishPage.container}>
      <Image
        source={{
          uri: item.imageURL,
        }}
        style={stylesDishPage.image}
      />
      <View style={stylesDishPage.dishDescription}>
        <Text>Цена : {item.price}</Text>
        <Text style={stylesDishPage.composition}>Состав:</Text>
        <View>
          {item.ingredients.split(";").map((ing, index) => {
            return <Text key={index}> {ing}</Text>;
          })}
        </View>
        <Text>Вес : {item.weight}</Text>
      </View>
      <View style={stylesDishPage.button}>
        <Button
          type="outline"
          title="Добавить в корзину"
          onPress={() => {
            setTimeout(() => {
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
            }, 1000);
          }}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    addItemToCart: (product) =>
      dispatch({ type: "ADD_TO_CART", payload: product }),
  };
};

export default connect(null, mapDispatchToProps)(DishPage);
