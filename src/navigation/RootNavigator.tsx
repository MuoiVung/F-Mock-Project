import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  BoardingScreen,
  CartScreen,
  CheckoutScreen,
  CongratsScreen,
  LoginScreen,
  ProductScreen,
  SignupScreen,
} from '../screens';
import {RootStackParamList} from '../types';
import HomeNavigator from './HomeNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Boarding">
        <RootStack.Screen name="Boarding" component={BoardingScreen} />
        <RootStack.Screen name="Signup" component={SignupScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="Product" component={ProductScreen} />
        <RootStack.Screen name="Cart" component={CartScreen} />
        <RootStack.Screen name="Checkout" component={CheckoutScreen} />
        <RootStack.Screen name="Congrats" component={CongratsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;