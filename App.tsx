import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import AppNavigator from './src/route/AppNavigator';

const store = configureStore();

console.disableYellowBox = true;

function App() {
  return <Provider store={store}>{AppNavigator()}</Provider>;
}

export default App;
