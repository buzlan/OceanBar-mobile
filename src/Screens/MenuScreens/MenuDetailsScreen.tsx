import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { getMenuDetails } from "../../mocks/getMenuDetails";
import { stylesMenuDetail } from "../../styles/menuDetailsScreenStyle";

export const MenuDetailsScreen = ({ navigation, route }) => {
  const [menuDetails, setMenuDetails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMenuDetails(route.params.menuName);
        setMenuDetails(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [route.params.menuName]);

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
