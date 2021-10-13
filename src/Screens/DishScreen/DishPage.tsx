import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {stylesDishPage} from '../../styles/dishPageStyle';

export const DishPage = ({route}) => {
  const item = route.params.dishDetails;
  return (
    <View style={stylesDishPage.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={{width: 200, height: 200}}
      />
      <View style={stylesDishPage.dishDescription}>
        <Text>Цена : {item.prise}</Text>
        <Text style={stylesDishPage.composition}>Состав:</Text>
        <View>
          {item.ingredients.map((ing, index) => {
            return <Text key={index}> {ing}</Text>;
          })}
        </View>
        <Text>Вес : {item.weight}</Text>
      </View>
      <View style={stylesDishPage.button}>
        <Button type="outline" title="Добавить в корзину" />
      </View>
    </View>
  );
};
