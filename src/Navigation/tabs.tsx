import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BasketScreen from '../Screens/basketScreen';
import DishesScreen from '../Screens/dishesScreen';
import ProfileScreen from '../Screens/profileScreen';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const menuName = 'MENU';
const profileName = 'PROFILE';
const basketName = 'BASKET';

type ScreenNames = "MENU" | "PROFILE" | "BASKET"

type KeyObjValue<T extends string, K> = {
  [key in T]: K
}

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={menuName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let rn  = route.name as ScreenNames;
          const iconNames: KeyObjValue<ScreenNames, () => React.ReactElement> = {
            [menuName]: () => (
              <MIcon
                name={focused ? 'fastfood' : 'fastfood'}
                size={size}
                color={color}
              />
            ),
            [profileName]: () => (
              <FAIcon
                name={focused ? 'user-circle' : 'user-circle'}
                size={size}
                color={color}
              />
            ),
            [basketName]: () => (
              <FAIcon
                name={focused ? 'shopping-basket' : 'shopping-basket'}
                size={size}
                color={color}
              />
            ),
          };
          return iconNames[rn]();
        },
      })}>
      <Tab.Screen name={menuName} component={DishesScreen}></Tab.Screen>
      <Tab.Screen name={basketName} component={BasketScreen}></Tab.Screen>
      <Tab.Screen name={profileName} component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
