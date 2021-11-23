import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'
import MapScreen from '../screens/MapScreen'
import StatsScreen from '../screens/StatsScreen'
import ProfileScreen from '../screens/ProfileScreen'


const tabBarOptions = {
  showlabel:false,
  tab: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    borderColor: 'orange',
    borderRadius: 15,
    height: 90
  }
}

const Tab = createBottomTabNavigator()
const Tabs = () => {
  return(
    <Tab.Navigator tabBarShowLabel={false} screenOptions={{tabBarStyle: {
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      elevation: 0,
      borderColor: 'orange',
      borderRadius: 15,
      height: 90
    }}}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="List" component={ListScreen}/>
      <Tab.Screen name="Map" component={MapScreen}/>
      <Tab.Screen name="Stats" component={StatsScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default Tabs