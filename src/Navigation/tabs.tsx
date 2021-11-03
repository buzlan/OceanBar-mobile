import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FAIcon from "react-native-vector-icons/FontAwesome";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";

import { MenuDetailsScreen } from "../screens/MenuScreens/MenuDetailsScreen";
import { ProfileScreen } from "../screens/TabsScreens/profileScreen";
import DishPage from "../screens/DishScreen/DishPage";
import { connect } from "react-redux";
import { SearchScreen } from "../screens/SearchScreen/SearchScreen";
import { DishesScreen } from "../screens/TabsScreens/dishesScreen";
import BasketScreen from "../screens/TabsScreens/basketScreen";
import { SearchClick } from "../components/SearchClick";

// Stack Navigator
const Stack = createStackNavigator();

const MenuScreenNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainMenuScreen"
        component={DishesScreen}
        options={{
          title: "Меню",
          headerStyle: { height: 70, backgroundColor: "transparent" },
          headerRight: () => {
            return <SearchClick props={props} />;
          },
          headerLeft: () => null,
          headerRightContainerStyle: {},
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="MenuDetailsScreen"
        component={MenuDetailsScreen}
        options={({ route }) => ({
          title: route?.params?.title,
          headerTitleAlign: "left",
          headerStyle: { height: 70, backgroundColor: "transparent" },
          headerRight: () => {
            return <SearchClick props={props} />;
          },
          headerLeftContainerStyle: {
            alignItems: "flex-end",
          },
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "bold",
          },
        })}
      />
      <Stack.Screen
        name="DishScreen"
        component={DishPage}
        options={({ route }) => ({
          title: route?.params?.dishDetails?.name,
          headerTitleAlign: "left",
          headerStyle: { height: 70, backgroundColor: "transparent" },
          headerRight: () => {
            return <SearchClick props={props} />;
          },
          headerLeftContainerStyle: {
            alignItems: "flex-end",
          },
        })}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterMenuItems: (searchValue) =>
      dispatch({ type: "SEARCH_MENU_ITEMS", payload: searchValue }),
  };
};

const WrappedMenuScreenNavigator = connect(
  null,
  mapDispatchToProps
)(MenuScreenNavigator);

// Tab navigation
const Tab = createBottomTabNavigator();

enum ScreenNames {
  Dishes = "Меню",
  Profile = "Профиль",
  Basket = "Корзина",
}

const tabs = [
  {
    tabName: ScreenNames.Dishes,
    tabComponent: WrappedMenuScreenNavigator,
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
        color={focused ? "white" : "grey"}
      />
    ),
    [ScreenNames.Profile]: () => (
      <FAIcon
        name={focused ? "user-circle" : "user-circle"}
        size={size}
        color={focused ? "white" : "grey"}
      />
    ),
    [ScreenNames.Basket]: () => (
      <FAIcon
        name={focused ? "shopping-basket" : "shopping-basket"}
        size={size}
        color={focused ? "white" : "grey"}
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
        tabBarStyle: { backgroundColor: "black" },
        tabBarLabelStyle: { color: "white" },
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
