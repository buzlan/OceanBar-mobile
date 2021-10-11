import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import getMenuDetails from '../../Mocks/GetMenuDetails';
const menuDetailsScreen = ({navigation, route}) => {
  const [menuDetails, setMenuDetails] = useState([]);
  useEffect(() => {
    console.log(route.params.menuName, 'menuName');
    (async () => {
      const data = await getMenuDetails(route.params.menuName);
      setMenuDetails(data);
    })();
  }, [route.params.menuName]);
  console.log(menuDetails);
  return (
    <ScrollView>
      <View>
        <Text></Text>
        {menuDetails.map(el => {
          return (
            <SafeAreaView>
              <Text>{el.name}</Text>
              <Image
                source={{
                  uri: el.image,
                }}
                style={{width: 200, height: 200}}
              />
              <Text>Цена : {el.prise}</Text>
              <Text>Вес : {el.weight}</Text>
            </SafeAreaView>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default menuDetailsScreen;
