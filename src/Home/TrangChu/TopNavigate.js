import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Breach from './Topnav/Breach/Breach.js';
import Omg from './Topnav/Omg/Omg.js';
import Island from './Topnav/Island/Iland.js';
import Pool from './Topnav/Pool/Poo.js';
import {
  AntDesign,
  MaterialCommunityIcons, MaterialIcons
} from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();
const TopNavigate = (navigation) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Omg" component={Omg}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ufo-outline" size={24} color="black" />
          ),
        }} />
      <Tab.Screen name="Breach" component={Breach}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="beach-access" size={24} color="black" />
          ),
        }} />
      <Tab.Screen name="Pool" component={Pool}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pool" size={24} color="black" />
          ),
        }} />
      <Tab.Screen name="Island" component={Island}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="island" size={24} color="black" />
          ),
        }} />
    </Tab.Navigator>
  )
}
export default TopNavigate;
