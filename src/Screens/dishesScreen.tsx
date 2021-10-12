import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {ParamListBase} from '@react-navigation/routers';
import {Button} from 'react-native-elements';

import {getMenuButtons} from '../mocks/getMenuBtns';
import {SearchBar} from '../components/shared/SearchBar';

interface Props extends BottomTabScreenProps<ParamListBase> {}

export const DishesScreen: React.FC<Props> = ({navigation}) => {
  const [menuButtons, setMenuButtons] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getMenuButtons();
      setMenuButtons(data as any[]);
    })();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{paddingTop: 60}}>
        {menuButtons.map(button => {
          return (
            <Button // Don't forget this!
              type="clear"
              key={button.id}
              title={button.title}
              buttonStyle={styles.buttons}
              onPress={() => {
                navigation.navigate('MenuDetailsScreen', {
                  menuName: button.alias,
                  title: button.title,
                });
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    paddingLeft: 60,
    alignSelf: 'flex-start',
    color: 'black',
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
