import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppLoader } from "../../components/AppLoader";

import { MenuService } from "../../services/http/MenuService";
import { stylesMenuDetail } from "../../styles/menuDetailsScreenStyle";

export const MenuDetailsScreen = ({ navigation, route }) => {
  const [menuDetails, setMenuDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await MenuService.getMenuDetails({
          category: route.params.menuName,
        });
        setMenuDetails(response.data.data.dishes);
        setLoading(false);
      } catch (error) {
        navigation.navigate("auth", { screen: "LoginScreen" });
      }
    })();
  }, [route.params.category]);
  console.log(loading);

  return (
    <ScrollView>
      {loading ? (
        <AppLoader />
      ) : (
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
      )}
    </ScrollView>
  );
};
