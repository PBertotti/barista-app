// -----------------------------
// File: Dashboard.js
// Author: Paulo Bruno B. Corá
// Date: 24/04/2021
// Brief: Barista app dashboard screen
// -----------------------------

// -----------------------------
// Import dependencies;
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Machine} from '../../components';
import {useSelector} from 'react-redux';
// -----------------------------

// -----------------------------
const Dashboard = () => {
  const dashboardState = useSelector(state => state.dashboard);

  return (
    <View style={styles.main}>
      {dashboardState.devices.map(device => (
        <Machine
          key={device.serialID}
          hasCup={device.status.hasCup}
          hasFilter={device.status.hasFilter}
          isPreparing={device.status.isPreparing}
          isReady={device.status.isReady}
          waterLevel={device.status.waterLevel}
          coffeeLevel={device.status.coffeeLevel}
        />
      ))}
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
