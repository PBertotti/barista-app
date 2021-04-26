// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá
// Date: 25/04/2021
// Brief: Barista app redux reducer;
// ----------------------------

// ----------------------------
import {combineReducers} from 'redux';

import {reducer as dashboardReducer} from '../reducers/dashboard';
// ----------------------------

export default combineReducers({
  dashboard: dashboardReducer,
});
