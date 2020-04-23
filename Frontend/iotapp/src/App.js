import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import MainScreen from './components/MainScreen';

import './index.css';
function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
export default App;