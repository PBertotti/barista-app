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
import clockIcon from '../../assets/ico/clock-icon.png';
// -----------------------------

// -----------------------------
const Dashboard = () => {
  return (
    <View style={styles.main}>
      <View style={styles.dateView}>
        <Image source={clockIcon} style={styles.dateIcon} />
        <Text style={styles.dateText}>tomorrow - 06:30</Text>
      </View>
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
  dateView: {
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dateText: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#B8B8B8',
  },
});

// -----------------------------

// -----------------------------
export default Dashboard;
// -----------------------------
