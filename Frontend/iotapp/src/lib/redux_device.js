// src/lib/redux.js

// Una implementación simple de los store/actions/reducer de Redux.
// Una verdadera aplicación sería más compleja y se dividiría en diferentes archivos.
import { createStore } from 'redux';

// Las acciones son los "nombres" de los cambios que pueden ocurrir en el store.
export const actions = {
  OFF_DEVICE: 'OFF_DEVICE',
  DISABLE_DEVICE: 'DISABLE_DEVICE',
};

// Los creadores de acciones son la forma en que se agrupan las acciones con los datos necesarios para ejecutarlas.
export const offDevice = id => ({ type: actions.OFF_DEVICE, id });
export const disableDevice = id => ({ type: actions.DISABLE_DEVICE, id });

// Todos nuestros reducers simplemente cambian el estado de una sola tarea.
function deviceStateReducer(deviceState) {
  return (state, action) => {
    return {
      ...state,
      devices: state.devices.map(device =>
        device.id === action.id ? { ...device, state: deviceState } : device
      ),
    };
  };
}

// El reducer describe como los contenidos del store cambian por cada acción.
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.OFF_DEVICE:
      return deviceStateReducer('DEVICE_OFF')(state, action);
    case actions.DISABLE_DEVICE:
      return deviceStateReducer('DEVICE_DISABLE')(state, action);
    default:
      return state;
  }
};

// El estado inicial de nuestro store cuando la app carga.
// Usualmente obtendrías esto de un servidor.
const defaultDevices = [
  { id: '1', type: 'foco', name: 'Foco', state: 'DEVICE_INBOX' },
  { id: '2', type: 'laptop', name: 'Laptop', state: 'DEVICE_INBOX' },
  { id: '3', type: 'cafe', name: 'Cafe', state: 'DEVICE_INBOX' },
  { id: '4', type: 'tv', name: 'TV', state: 'DEVICE_INBOX' },
  { id: '5', type: 'bocina', name: 'Bocina', state: 'DEVICE_INBOX' },
];

// Exportamos el store de redux construido.
export default createStore(reducer, { devices: defaultDevices });