import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux_device';
import './index.css';
import DeviceScreen from './components/DeviceScreen';

function App() {
  return (
    <Provider store={store}>
      <DeviceScreen />
    </Provider>
  );
}
export default App;