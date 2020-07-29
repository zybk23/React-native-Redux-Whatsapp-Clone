/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from './redux/reducers/main';
import Drawers from './react/navigation/Drawer';
import Bar from './react/exstra/Bar';



const store=configureStore();

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
          <Bar/>
      </Provider>
  );
};
export default App;
