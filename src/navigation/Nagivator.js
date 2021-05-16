// -----------------------------
// File: Dashboard.js
// Author: Paulo Bruno B. Corá
// Date: 24/04/2021
// Brief: Barista app nagivation menu
// -----------------------------

// -----------------------------
// Import dependencies;
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard, Addition} from '../screens';

// Import lang;
import language from '../lang/lang.json';

// Import Icons;
import {
  clockIcon,
  clockIconActive,
  cupIcon,
  cupIconActive,
  settingsIcon,
  settingsIconActive,
} from '../assets/ico';
// -----------------------------

// -----------------------------

// -----------------------------

// -----------------------------
const Stack = createBottomTabNavigator();
const lang = language.eng;

const Nagivator = () => {
  return (
    <Stack.Navigator
      tabBarOptions={navBarStyle}
      initialRouteName={lang.dashboard}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconSource;
          switch (route.name) {
            case lang.dashboard:
              color === '#81200B'
                ? (iconSource = cupIconActive)
                : (iconSource = cupIcon);
              break;
            case lang.routines:
              color === '#81200B'
                ? (iconSource = clockIconActive)
                : (iconSource = clockIcon);
              break;
            case lang.settings:
              color === '#81200B'
                ? (iconSource = settingsIconActive)
                : (iconSource = settingsIcon);
              break;
            default:
              break;
          }

          return (
            <Image
              source={iconSource}
              style={{width: 26, marginTop: 3, resizeMode: 'contain'}}
            />
          );
        },
      })}>
      <Stack.Screen name={lang.routines} component={Addition} />
      <Stack.Screen name={lang.dashboard} component={Dashboard} />
      <Stack.Screen name={lang.settings} component={Addition} />
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

const navBarStyle = {
  showIcon: true,
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
};
// -----------------------------

// -----------------------------
export default Nagivator;
// -----------------------------
