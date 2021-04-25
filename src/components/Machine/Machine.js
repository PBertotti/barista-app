// -----------------------------
// File: Dashboard.js
// Author: Paulo Bruno B. Corá
// Date: 24/04/2021
// Brief: Barista app dashboard screen
// -----------------------------

// -----------------------------
// Import dependencies;
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import baristaIcon from '../../assets/ico/barista-icon.png';

// -----------------------------

// -----------------------------
const Machine = () => {
  return (
    <View style={styles.base}>
      <View style={styles.internal}>
        <View style={styles.frontShadow}>
          <View style={styles.front}>
            <View style={styles.buttonShadow}>
              <View style={styles.button}>
                <Image source={baristaIcon} style={styles.baristaIcon} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
// -----------------------------

// -----------------------------
const styles = StyleSheet.create({
  base: {
    alignSelf: 'center',
    marginTop: 20,
    width: 330,
    height: 500,
    backgroundColor: '#262626',
    borderRadius: 14,
  },
  internal: {
    alignSelf: 'center',
    width: 330,
    height: 470,
    backgroundColor: '#DADADA',
    borderRadius: 14,
  },
  front: {
    alignSelf: 'center',
    width: 330,
    height: 260,
    backgroundColor: '#262626',
    borderRadius: 14,
  },
  frontShadow: {
    alignSelf: 'center',
    width: 330,
    height: 275,
    backgroundColor: '#A7A7A7',
    borderRadius: 14,
  },
  button: {
    alignSelf: 'center',
    width: 150,
    height: 130,
    backgroundColor: '#81200B',
    borderRadius: 14,
  },
  buttonShadow: {
    alignSelf: 'center',
    width: 150,
    height: 145,
    marginTop: 15,
    backgroundColor: '#6B1A08',
    borderRadius: 14,
  },
  baristaIcon: {
    alignSelf: 'center',
    marginTop: 30,
  },
});

// -----------------------------

// -----------------------------
export default Machine;
// -----------------------------
