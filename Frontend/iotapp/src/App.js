import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux_device';
import './index.css';

import Homepage from './components/Homepage';

function App() {
  return (
    <Provider store={store}>
      <Homepage user={{id: "1", type: "1"}} />
    </Provider>
  );
}
export default App;

