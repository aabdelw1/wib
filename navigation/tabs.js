import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'
import MapScreen from '../screens/MapScreen'
import StatsScreen from '../screens/StatsScreen'
import ProfileScreen from '../screens/ProfileScreen'


const tabBarOptions = {
  tabBarShowLabel:false,
  tabBarStyle: {
  position: 'absolute',
  elevation: 0,
  borderColor: 'orange',
  height: 90,
}}


const Tab = createBottomTabNavigator()
const Tabs = () => {
  return(
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen 
        name="List" 
        component={ListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Image
              source={require('../assets/navIcons/list.png')}
              resizeMode="contain"
              style = {{
                width:25,
                height: 25, 
                tintColor: focused ? '#e32f45' : '#748c94',
              }}
            />
            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12, marginTop: 5}}>
              LIST
            </Text>
          </View>
          ),
        }}
      />
      <Tab.Screen name="Map" component={MapScreen}/>
      <Tab.Screen name="Stats" component={StatsScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default Tabs