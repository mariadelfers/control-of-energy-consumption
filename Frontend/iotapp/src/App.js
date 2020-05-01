import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux_device';
import './index.css';
import DeviceScreen from './components/DeviceScreen';
import DeviceForm from './components/DeviceForm';

function App() {
  return (
    <Provider store={store}>
      <DeviceScreen />
      <DeviceForm />
    </Provider>
  );
}
export default App;