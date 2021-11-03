import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppLoader } from "../../components/AppLoader";

import { MenuService } from "../../services/http/MenuService";
import { stylesMenuDetail } from "../../styles/menuDetailsScreenStyle";
import uuid from "uuid";

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

  return (
    <View style={stylesMenuDetail.mainWrapper}>
      <ScrollView>
        {loading ? (
          <AppLoader />
        ) : (
          <View style={stylesMenuDetail.elementsWrapper}>
            {menuDetails.map((el) => {
              return (
                <View
                  style={stylesMenuDetail.touchableOpacityWrapper}
                  key={uuid.v4()}
                >
                  <TouchableOpacity
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
                      style={stylesMenuDetail.imageStyle}
                    />
                    <View style={stylesMenuDetail.dishDescription}>
                      <Text style={stylesMenuDetail.bynTextStyle}>
                        {el.price} BYN
                      </Text>
                      <Text style={stylesMenuDetail.weightText}>
                        {el.weight}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
