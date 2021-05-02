import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Navigator from './navigation';
import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
