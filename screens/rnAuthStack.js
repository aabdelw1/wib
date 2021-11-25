import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './RootStack/SplashScreen'
import SignInScreen from './RootStack/SignInScreen'
import SignUpScreen from './RootStack/SignUpScreen'

import Tabs from '../navigation/tabs'


 const Stack = createStackNavigator()

 export const AppStack = () => {
  return (
    <Tabs/>
  );
};


export const AuthStack = ({navigation}) => (
    <Stack.Navigator headerMode = 'none'>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen}/>
      <Stack.Screen name={'SignInScreen'} component={SignInScreen}/>
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen}/>
    </Stack.Navigator>
)

