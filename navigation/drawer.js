import React from 'react';
import { Text } from "react-native";
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'
import MapScreen from '../screens/MapScreen'
import StatsScreen from '../screens/StatsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';



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

const Drawer = createDrawerNavigator()
const Drawers = () => {
  return(
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Map" component={MapScreen} />
    </Drawer.Navigator>
  )
}

export default Drawers