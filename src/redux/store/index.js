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
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
// ----------------------------

// Define Middlewares;
const middlewares = [thunk];

// Define Redux-Persist config;
const persisConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persisConfig, reducer);

// Create redux store;
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
// ----------------------------

// ----------------------------
export default store;
// ----------------------------
