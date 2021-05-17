// -----------------------------
// File: Machine.js
// Author: Paulo Bruno B. Corá
// Date: 24/04/2021
// Brief: Barista app dialog modal component
// -----------------------------

// -----------------------------
// Import dependencies;
import React from 'react';

// Import components;
import {StyleSheet, View, Image, Text, Button} from 'react-native';
import Modal from 'react-native-modal';

// Import assets;
import {cupImage, coffeeBrewing, searchingCuppy} from '../../assets/img';

// Import lang;
import language from '../../lang/lang.json';

// -----------------------------

// -----------------------------
const DialogModal = ({
  handleModalClose,
  image,
  title,
  description,
  buttonText,
}) => {
  let ilustration;

  switch (image) {
    case 'searching':
      ilustration = searchingCuppy;
      break;
    default:
      ilustration = searchingCuppy;
      break;
  }

  return (
    <View>
      <Modal isVisible={true}>
        <View style={styles.body}>
          <Image style={styles.ilustration} source={ilustration} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View
            style={styles.button}
            title={buttonText}
            onTouchEnd={handleModalClose}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
// -----------------------------

// -----------------------------
const styles = StyleSheet.create({
  body: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '35%',
    width: 330,
    height: 400,
    backgroundColor: '#262626',
    borderRadius: 14,
    position: 'absolute',
    zIndex: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 30,
    },
    shadowOpacity: 0.85,
    shadowRadius: 4,
  },
  title: {
    fontWeight: '700',
    color: '#DADADA',
    fontSize: 20,
    marginTop: 30,
  },
  description: {
    color: '#DADADA',
    fontSize: 16,
    opacity: 0.5,
    marginTop: 5,
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: '#81200B',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#DADADA',
    fontWeight: '700',
    padding: 10,
    textTransform: 'uppercase',
  },
  ilustration: {
    maxWidth: 150,
    maxHeight: 150,
    marginTop: 40,
  },
});

// -----------------------------

// -----------------------------
export default DialogModal;
// -----------------------------
