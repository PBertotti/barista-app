// -----------------------------
// File: store.js
// Author: Paulo Bruno B. Corá
// Date: 25/04/2021
// Brief: Barista app redux store;
// ----------------------------

// ----------------------------
// Import redux dependencies;
import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
// ----------------------------

// Define Middlewares;
const middlewares = [thunk];

// Create redux store;
const store = createStore(reducer, applyMiddleware(...middlewares));
// ----------------------------

// ----------------------------
export default store;
// ----------------------------
