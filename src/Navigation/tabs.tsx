import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FAIcon from "react-native-vector-icons/FontAwesome";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";

import { MenuDetailsScreen } from "../screens/MenuScreens/MenuDetailsScreen";

import { SearchBar } from "../components/shared/SearchBar";
import { DishesScreen } from "../screens/dishesScreen";
import { BasketScreen } from "../screens/basketScreen";
import { ProfileScreen } from "../screens/profileScreen";
import { DishPage } from "../screens/DishScreen/DishPage";

// Stack Navigator
const Stack = createStackNavigator();

const MenuScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainMenuScreen"
        component={DishesScreen}
        options={{
          title: "Меню",
          headerRight: () => <SearchBar />,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="MenuDetailsScreen"
        component={MenuDetailsScreen}
        options={({ route }) => ({
          title: route?.params?.title,
          headerTitleAlign: "center",
          headerRight: () => <SearchBar />,
          headerLeftContainerStyle: {
            alignItems: "flex-end",
          },
        })}
      />
      <Stack.Screen
        name="DishScreen"
        component={DishPage}
        options={({ route }) => ({
          title: route?.params?.dishDetails?.name,
          headerTitleAlign: "center",
          headerRight: () => <SearchBar />,
          headerLeftContainerStyle: {
            alignItems: "flex-end",
          },
        })}
      />
    </Stack.Navigator>
  );
};

// Tab navigation
const Tab = createBottomTabNavigator();

enum ScreenNames {
  Dishes = "Блюда",
  Profile = "Профиль",
  Basket = "Корзина",
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
const setTabBarIcon = (focused, color, size, route) => {
  let rn = route.name as ScreenNames;
  const iconNames: KeyObjValue<ScreenNames, () => React.ReactElement> = {
    [ScreenNames.Dishes]: () => (
      <MIcon
        name={focused ? "fastfood" : "fastfood"}
        size={size}
        color={color}
      />
    ),
    [ScreenNames.Profile]: () => (
      <FAIcon
        name={focused ? "user-circle" : "user-circle"}
        size={size}
        color={color}
      />
    ),
    [ScreenNames.Basket]: () => (
      <FAIcon
        name={focused ? "shopping-basket" : "shopping-basket"}
        size={size}
        color={color}
      />
    ),
  };
  return iconNames[rn]();
};
type KeyObjValue<T extends string, K> = {
  [key in T]: K;
};

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.Dishes}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          setTabBarIcon(focused, color, size, route),
        headerShown: false,
      })}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.tabName}
          name={tab.tabName}
          component={tab.tabComponent}
        ></Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};
