// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá
// Date: 25/04/2021
// Brief: Barista app dashboard reducer
// ----------------------------

// ----------------------------
// Import Dashboard action types;
import {SEARCH_REQUEST, SEARCH_RESULT} from '../../actions/dashboard';
// ----------------------------

// ----------------------------
//Define initial state;
const initialState = {
  devices: [
    {
      serialID: '000-III',
      status: {
        waterLevel: 2,
        coffeeLevel: 2,
        isPreparing: false,
        hasFilter: true,
        hasCup: true,
        isReady: false,
      },
      schedule: [{type: 'routine', time: '10:00:00'}],
    },
  ],
};

//Define dashboard reducer;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_REQUEST':
      return {...state};
    default:
      return {...state};
  }
};
// ----------------------------
