import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreenNavigator} from './auth';
import {Tabs} from './tabs';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="auth"
        component={AuthScreenNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
