import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';

import {MenuDetailsScreen} from '../screens/MenuScreens/MenuDetailsScreen';
import {DishesScreen} from '../screens/DishesScreen';
import {BasketScreen} from '../screens/BasketScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {SearchBar} from '../components/shared/SearchBar';

// Stack Navigator
const Stack = createStackNavigator();

const MenuScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainMenuScreen"
        component={DishesScreen}
        options={{
          title: 'Меню',
          headerRight: () => <SearchBar />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="MenuDetailsScreen"
        component={MenuDetailsScreen}
        options={({route}) => ({
          title: route?.params?.title,
          headerTitleAlign: 'center',
          headerRight: () => <SearchBar />,
        })}
      />
    </Stack.Navigator>
  );
};

// Tab navigation
const Tab = createBottomTabNavigator();

enum ScreenNames {
  Dishes = 'Блюда',
  Profile = 'Профиль',
  Basket = 'Корзина',
}

const tabs = [
  {
    tabName: ScreenNames.Dishes,
    tabComponent: MenuScreenNavigator,
  },
  {
    tabName: ScreenNames.Basket,
    tabComponent: BasketScreen,
  },
  {
    tabName: ScreenNames.Profile,
    tabComponent: ProfileScreen,
  },
];

type KeyObjValue<T extends string, K> = {
  [key in T]: K;
};

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.Dishes}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let rn = route.name as ScreenNames;
          const iconNames: KeyObjValue<ScreenNames, () => React.ReactElement> =
            {
              [ScreenNames.Dishes]: () => (
                <MIcon
                  name={focused ? 'fastfood' : 'fastfood'}
                  size={size}
                  color={color}
                />
              ),
              [ScreenNames.Profile]: () => (
                <FAIcon
                  name={focused ? 'user-circle' : 'user-circle'}
                  size={size}
                  color={color}
                />
              ),
              [ScreenNames.Basket]: () => (
                <FAIcon
                  name={focused ? 'shopping-basket' : 'shopping-basket'}
                  size={size}
                  color={color}
                />
              ),
            };
          return iconNames[rn]();
        },
        headerShown: false,
      })}>
      {tabs.map(tab => (
        <Tab.Screen
          name={tab.tabName}
          component={tab.tabComponent}></Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};
