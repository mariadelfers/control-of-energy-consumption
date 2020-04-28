import React from 'react';
import ReactDOM from 'react-dom';
import DeviceList from './DeviceList';
import { withOffDevices } from './DeviceList.stories';

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  const events = { offDevice: jest.fn(), disableDevice: jest.fn() };
  ReactDOM.render(<DeviceList devices={withOffDevices} {...events} />, div);

  // Esperamos que la tarea titulada "Task 6 (pinned)" se ejecute primero, no al final.
  const lastDeviceInput = div.querySelector('.device-list:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastDeviceInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});