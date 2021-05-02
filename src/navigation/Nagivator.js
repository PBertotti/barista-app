// -----------------------------
// File: Dashboard.js
// Author: Paulo Bruno B. Corá
// Date: 24/04/2021
// Brief: Barista app nagivation menu
// -----------------------------

// -----------------------------
// Import dependencies;
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard, Addition} from '../screens';

// Import lang;
import language from '../lang/lang.json';
import {Icon} from 'react-native';
// -----------------------------

// -----------------------------

// -----------------------------

// -----------------------------
const Stack = createBottomTabNavigator();
const lang = language.eng;

const Nagivator = () => {
  return (
    <Stack.Navigator
      tabBarOptions={{
        activeTintColor: '#81200B',
        inactiveTintColor: '#DADADA',
        borderTopWidth: 0,
        borderTopColor: 'transparent',
        elevation: 0,
        style: {
          backgroundColor: '#262626',
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          elevation: 0,
          shadowColor: '#5bc4ff',
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
          paddingBottom: 3,
        },
      }}>
      <Stack.Screen name={lang.routines} component={Addition} />
      <Stack.Screen name={lang.dashboard} component={Dashboard} />
      <Stack.Screen name={lang.settings} component={Dashboard} />
    </Stack.Navigator>
  );
};
// -----------------------------

// -----------------------------
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#3A3A3A',
    height: '100%',
  },
});

// -----------------------------

// -----------------------------
export default Nagivator;
// -----------------------------
