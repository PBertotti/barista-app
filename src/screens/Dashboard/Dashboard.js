// -----------------------------
// File: Dashboard.js
// Author: Paulo Bruno B. Corá
// Date: 24/04/2021
// Brief: Barista app dashboard screen
// -----------------------------

// -----------------------------
// Import dependencies;
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Machine} from '../../components';

// -----------------------------

// -----------------------------
const Dashboard = () => {
  return (
    <View style={styles.main}>
      <Machine />
    </View>
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
export default Dashboard;
// -----------------------------
