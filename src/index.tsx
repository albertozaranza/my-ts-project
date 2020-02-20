import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';

import store from './store';

export default function index() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <App />
    </Provider>
  );
}
