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
  headerShown: false,
  tabBarStyle: {
  position: 'absolute',
  elevation: 0,
  height: 90,
}}

const tabs =[{
  name: "List",
  component: ListScreen,
  png: require('../assets/navIcons/list.png')
},{
  name: "Map",
  component: MapScreen,
  png: require('../assets/navIcons/map.png')
},{
  name: "Stats",
  component: StatsScreen,
  png: require('../assets/navIcons/stats.png')
},{
  name: "Profile",
  component: ProfileScreen,
  png: require('../assets/navIcons/profile.png')
}]

const Tab = createBottomTabNavigator()
const Tabs = () => {
  return(
    <Tab.Navigator screenOptions={tabBarOptions}>
      {
        tabs.map((tab, key) => {
          return (<Tab.Screen 
            name={tab.name}
            component={tab.component}
            key={key}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                  source={tab.png}
                  resizeMode="contain"
                  style = {{
                    width:25,
                    height: 25, 
                    tintColor: focused ? '#4361EE' : '#748c94',
                  }}
                />
                <Text style={{color: focused ? '#4361EE' : '#748c94', fontSize: 12, marginTop: 5}}>
                  {tab.name}
                </Text>
              </View>
              ),
            }}
          />)
        })
      }
    </Tab.Navigator>
  )
}

export default Tabs