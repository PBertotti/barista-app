// -----------------------------
// File: Dashboard.js
// Author: Paulo Bruno B. Corá
// Date: 24/04/2021
// Brief: Barista app dashboard screen
// -----------------------------

// -----------------------------
// Import dependencies;
import React, {useEffect, useState} from 'react';

// Import components;
import {StyleSheet, View, Image, Text} from 'react-native';

// Import assets;
import {
  baristaIcon,
  coffeeIcon,
  waterIcon,
  clockIcon,
  filterIcon,
  checkIcon,
  alertIcon,
} from '../../assets/ico';
import {cupImage, coffeeBrewing} from '../../assets/img';

// Import lang;
import language from '../../lang/lang.json';

// -----------------------------

// -----------------------------
const ProgressFeedback = ({
  lang,
  waterLevel,
  coffeeLevel,
  isReady,
  hasFilter,
  isPreparing,
  hasCup,
  nextDate,
}) => {
  //Define states;
  const [displayedText, setDisplayedText] = useState();
  const [feedbackSate, setFeedbackState] = useState('regular');

  // Update feedback on progress changing;
  // -----------------------------
  useEffect(() => {
    let newDisplayedText;
    let newFeedbackSate;

    if (isReady) {
      newDisplayedText = lang.ready;
      newFeedbackSate = 'ready';
    } else if (!hasFilter) {
      newDisplayedText = lang.noFilter;
      newFeedbackSate = 'alert';
    } else if (!hasCup) {
      newDisplayedText = lang.noCup;
      newFeedbackSate = 'alert';
    } else if (waterLevel === 0) {
      newDisplayedText = lang.noWater;
      newFeedbackSate = 'alert';
    } else if (coffeeLevel === 0) {
      newDisplayedText = lang.noCoffee;
      newFeedbackSate = 'alert';
    } else if (isPreparing) {
      newDisplayedText = lang.preparing;
      newFeedbackSate = 'alert';
    } else {
      newDisplayedText = 'nextDate';
    }

    setDisplayedText(newDisplayedText);
    setFeedbackState(newFeedbackSate);
  }, [
    isReady,
    hasFilter,
    hasCup,
    waterLevel,
    coffeeLevel,
    isPreparing,
    nextDate,
    lang,
  ]);

  // Define new style proprieties;
  // -----------------------------
  const displayedIcon =
    feedbackSate === 'ready'
      ? checkIcon
      : feedbackSate === 'alert'
      ? alertIcon
      : clockIcon;

  const displayedTextStyle =
    feedbackSate === 'ready'
      ? {...styles.progressText, color: '#12991F'}
      : feedbackSate === 'alert'
      ? {...styles.progressText, color: '#C62300'}
      : {...styles.progressText};

  // Render component;
  // -----------------------------
  return (
    <View style={styles.progressView}>
      <Image source={displayedIcon} />
      <Text style={displayedTextStyle}>{displayedText}</Text>
    </View>
  );
};
// -----------------------------

// -----------------------------
const BrewBottom = ({clicked, disabled}) => {
  return (
    <View
      style={
        clicked || disabled ? styles.buttonShadowDisabled : styles.buttonShadow
      }>
      <View
        style={
          clicked
            ? styles.buttonClicked
            : disabled
            ? styles.buttonDisabled
            : styles.button
        }>
        <Image source={baristaIcon} style={styles.baristaIcon} />
      </View>
    </View>
  );
};
// -----------------------------

// -----------------------------
const Indicator = ({type, volume}) => {
  let fillShadowColor, fillColor, indicatorIcon;

  switch (type) {
    case 'coffee':
      fillColor = '#5B4131';
      fillShadowColor = '#443125';
      indicatorIcon = coffeeIcon;
      break;
    case 'water':
      fillColor = '#3D7394';
      fillShadowColor = '#335D76';
      indicatorIcon = waterIcon;
      break;
  }

  const indicatorFillShadow = {
      height: 30,
      width: volume * 100,
      backgroundColor: fillShadowColor,
      borderRadius: 14,
    },
    indicatorFill = {
      height: 24,
      width: volume * 100,
      backgroundColor: fillColor,
      borderRadius: 14,
    };

  return (
    <View style={styles.indicatorContainerShadow}>
      <View style={styles.indicatorContainer}>
        <View style={indicatorFillShadow}>
          <View style={indicatorFill}>
            <Image source={indicatorIcon} style={styles.indicatorIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};
// -----------------------------

// -----------------------------
const Machine = ({hasCup, isReady, hasFilter, isPreparing}) => {
  const lang = language.eng;

  return (
    <View>
      <ProgressFeedback lang={lang} />
      <View style={styles.base}>
        <View style={styles.internal}>
          <View style={styles.frontShadow}>
            <View style={styles.front}>
              <BrewBottom disabled={!hasFilter || isReady} />
              <Indicator type="coffee" volume={2} />
              <Indicator type="water" volume={2} />
              {!hasFilter && (
                <Image source={filterIcon} style={styles.filterIcon} />
              )}
            </View>
            <View style={styles.dispenserBase}>
              <View style={styles.dispenserPipe}>
                <View style={styles.dispenserHole}>
                  {isPreparing && (
                    <Image source={coffeeBrewing} style={styles.preparing} />
                  )}
                </View>
              </View>
            </View>
          </View>
          {!hasCup && (
            <View>
              <Image source={cupImage} style={styles.cupImage} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
// -----------------------------

// -----------------------------
const styles = StyleSheet.create({
  //Machine styles;
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
    height: 475,
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
  dispenserBase: {
    alignSelf: 'center',
    width: 80,
    height: 25,
    backgroundColor: '#C4C4C4',
    borderBottomEndRadius: 14,
    borderBottomStartRadius: 14,
  },
  dispenserPipe: {
    alignSelf: 'center',
    width: 20,
    height: 40,
    backgroundColor: '#C4C4C4',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  dispenserHole: {
    alignSelf: 'center',
    width: 20,
    height: 10,
    marginTop: 30,
    backgroundColor: '#9EA0A2',
    borderRadius: 15,
  },
  cupImage: {
    marginLeft: 80,
  },
  readyText: {
    color: '#00A335',
    fontSize: 24,
    textAlign: 'center',
    position: 'absolute',
    fontWeight: '700',
    textTransform: 'uppercase',
    top: 120,
    left: 125,
    zIndex: 3,
  },
  filterIcon: {
    bottom: 175,
    left: 260,
    zIndex: 3,
  },
  preparing: {
    alignSelf: 'center',
    marginLeft: 15,
    borderRadius: 15,
  },
  // Button styles;
  button: {
    alignSelf: 'center',
    width: 150,
    height: 130,
    backgroundColor: '#81200B',
    borderRadius: 14,
  },
  buttonClicked: {
    alignSelf: 'center',
    width: 150,
    height: 130,
    backgroundColor: '#81200B',
    borderRadius: 14,
  },
  buttonDisabled: {
    alignSelf: 'center',
    width: 150,
    height: 130,
    backgroundColor: '#888888',
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
  buttonShadowDisabled: {
    alignSelf: 'center',
    width: 150,
    height: 130,
    marginTop: 30,
    backgroundColor: '#6B1A08',
    borderRadius: 14,
  },
  baristaIcon: {
    alignSelf: 'center',
    marginTop: 30,
  },
  // Indicator styles
  indicatorContainerShadow: {
    alignSelf: 'center',
    marginTop: 10,
    height: 30,
    width: 300,
    backgroundColor: '#292F32',
    borderRadius: 14,
  },
  indicatorContainer: {
    alignSelf: 'center',
    height: 24,
    width: 300,
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
  },
  indicatorIcon: {
    marginTop: 3,
    marginLeft: 8,
  },
  // Date styles;
  progressView: {
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressText: {
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
export default Machine;
// -----------------------------
