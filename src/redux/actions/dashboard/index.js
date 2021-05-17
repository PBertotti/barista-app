// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá
// Date: 25/04/2021
// Brief: Barista app dashboard actions
// ----------------------------

// ----------------------------
// import action types;
import {SEARCH_REQUEST, SEARCH_RESULT} from './types';

// ----------------------------
// Handle device searching request;
export const handleDeviceSearchRequest = () => dispatch => {
  dispatch({type: SEARCH_REQUEST});
};

// ----------------------------
