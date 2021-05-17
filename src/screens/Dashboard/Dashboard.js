// -----------------------------
// File: Dashboard.js
// Author: Paulo Bruno B. Corá
// Date: 24/04/2021
// Brief: Barista app dashboard screen
// -----------------------------

// -----------------------------
// Import dependencies;
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Machine, DialogModal} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import Fab from 'react-native-fab';
import {handleDeviceSearchRequest} from '../../redux/actions/dashboard';

// Import lang;
import language from '../../lang/lang.json';
// -----------------------------

// -----------------------------
const Dashboard = () => {
  // -----------------------------
  // Define hooks and states;
  const dashboardState = useSelector(state => state.dashboard);
  const [modalState, setModalState] = useState(null);
  const dispatch = useDispatch();
  const lang = language.eng;

  // -----------------------------
  // Handle closure of any open model;
  const handleModalClose = () => {
    setModalState(null);
  };

  // Handle device searching request;
  const handleSearchRequest = () => {
    setModalState({
      image: 'searching',
      title: lang.searchingDevices,
      description: lang.searchingDevicesDescription,
      buttonText: lang.cancel,
    });

    dispatch(handleDeviceSearchRequest());
  };

  // -----------------------------
  // Screen rendering
  return (
    <View style={styles.main}>
      {modalState && (
        <DialogModal
          handleModalClose={handleModalClose}
          title={modalState.title}
          description={modalState.description}
          buttonText={modalState.buttonText}
        />
      )}
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
      <Fab buttonColor="#81200B" onClickAction={handleSearchRequest} />
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
