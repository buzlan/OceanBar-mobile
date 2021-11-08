import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

import { stylesDishPage } from "../../styles/dishPageStyle";
import { showMessage } from "react-native-flash-message";
import { addToCart, updateItemsFromCart } from "../../actions/cart";
import { ModalComponent } from "../../components/Modal";
import { Composition } from "../../components/Composition";

const DishPage = ({ route, addItemToCart }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const item = route.params.dishDetails;
  const [dish, setDish] = useState({ ...item, excludedIng: [] });
  const getNewIng = (newIng, excluded) => {
    setDish((prev) => ({
      ...prev,
      ingredients: newIng,
      excludedIng: excluded,
    }));
  };

  return (
    <>
      <ScrollView style={stylesDishPage.scrollStyle}>
        <View style={stylesDishPage.container}>
          <Image
            source={{
              uri: dish.imageURL,
            }}
            style={stylesDishPage.image}
          />
          <View style={stylesDishPage.wrapperDishElements}>
            <View style={stylesDishPage.leftColumnWrapper}>
              <Text style={stylesDishPage.compositionTitleText}>Состав</Text>
              {dish.ingredients.split(";").map((ing, index) => (
                <Composition ing={ing} key={index} />
              ))}
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={stylesDishPage.changeTitleText}>Изменить</Text>
            </TouchableOpacity>
          </View>
          <View style={stylesDishPage.caloriesWrapper}>
            <FAIcon name={"fire"} size={20} />
            <Text style={stylesDishPage.caloriesText}>{dish.calories}</Text>
          </View>
          <View style={stylesDishPage.priceWrapper}>
            <Text style={stylesDishPage.priceText}>{dish.price}</Text>
            <Text style={stylesDishPage.bynText}>BYN</Text>
          </View>
          <View style={stylesDishPage.buttonWrapper}>
            <Button
              type="outline"
              title="Добавить в корзину"
              titleStyle={stylesDishPage.titleInputBtn}
              buttonStyle={stylesDishPage.inputButton}
              onPress={() => {
                addItemToCart(dish);
                showMessage({
                  message: `${dish.name} добавлено в корзину`,
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
      <ModalComponent
        modalVisible={modalVisible}
        items={item}
        setModalVisible={setModalVisible}
        sendNewData={getNewIng}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    addItemToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(DishPage);
