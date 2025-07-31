import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CheckoutScreen,
  OnboardingScreen,
  HomeScreen,
  EmptyScreen,
} from '../screens';

const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="EmptyScreen" component={EmptyScreen} />
    </Stack.Navigator>
  );
};

export default Navigations;
