import React from 'react';
import {Provider} from 'react-redux';
import {Dashboard} from './screens';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
