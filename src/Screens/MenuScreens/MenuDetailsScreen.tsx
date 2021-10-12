import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {getMenuDetails} from '../../mocks/getMenuDetails';

export const MenuDetailsScreen = ({navigation, route}) => {
  const [menuDetails, setMenuDetails] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getMenuDetails(route.params.menuName);
      setMenuDetails(data);
    })();
  }, [route.params.menuName]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {menuDetails.map(el => {
          return (
            <SafeAreaView style={styles.dishItem}>
              <Text style={styles.dishTitle}>{el.name}</Text>
              <Image
                source={{
                  uri: el.image,
                }}
                style={{width: 200, height: 200}}
              />
              <View style={styles.dishDescription}>
                <Text>Цена : {el.prise}</Text>
                <Text>Вес : {el.weight}</Text>
              </View>
            </SafeAreaView>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dishItem: {
    padding: 10,
  },
  dishTitle: {
    fontWeight: '900',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  dishDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});
