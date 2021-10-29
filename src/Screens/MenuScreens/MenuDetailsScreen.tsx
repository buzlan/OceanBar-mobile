import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { MenuService } from "../../services/http/MenuService";
import { stylesMenuDetail } from "../../styles/menuDetailsScreenStyle";

export const MenuDetailsScreen = ({ navigation, route }) => {
  const [menuDetails, setMenuDetails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await MenuService.getMenuDetails({
          category: route.params.menuName,
        });
        setMenuDetails(response.data.data.dishes);
      } catch (error) {
        navigation.navigate("auth", { screen: "LoginScreen" });
      }
    })();
  }, [route.params.category]);

  return (
    <ScrollView>
      <View style={stylesMenuDetail.container}>
        {menuDetails.map((el) => {
          return (
            <TouchableOpacity
              key={el.id}
              style={stylesMenuDetail.dishItem}
              onPress={() => {
                navigation.navigate("DishScreen", { dishDetails: el });
              }}
            >
              <Text style={stylesMenuDetail.dishTitle}>{el.name}</Text>
              <Image
                source={{
                  uri: el.imageURL,
                }}
                style={{ width: 200, height: 200 }}
              />
              <View style={stylesMenuDetail.dishDescription}>
                <Text>Цена : {el.price}</Text>
                <Text>Вес : {el.weight}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
