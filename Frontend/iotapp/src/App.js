import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux_device';
import './index.css';
import DeviceList from './components/DeviceList';
import DeviceScreen from './components/DeviceScreen';
import DeviceForm from './components/DeviceForm';
import RoomList from './components/RoomList';
import RoomScreen from './components/RoomScreen';


function App() {
  return (
    <Provider store={store}>
      <DeviceScreen />
      <RoomScreen />
    </Provider>
  );
}
export default App;