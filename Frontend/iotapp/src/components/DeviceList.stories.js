import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureDeviceList } from './DeviceList';
import { device, actions } from './Room.stories';

export const defaultDevices = [
  { ...device, id: '1', name: 'Foco', type: 'foco' },
  { ...device, id: '2', name: 'Cafetera', type: 'cafe' },
  { ...device, id: '3', name: 'Mi bocina', type: 'bocina' },
  { ...device, id: '4', name: 'Tv', type: 'tv' },
  { ...device, id: '5', name: 'Lámpara', type: 'foco' },
  { ...device, id: '6', name: 'Tira led', type: 'foco' },
];

export const withOffDevices = [
  ...defaultDevices.slice(0, 5),
  { id: '1', name: 'Device 1', state: 'DEVICE_OFF', type: 'foco' },
  { id: '6', name: 'Device 6', state: 'DEVICE_OFF', type: 'foco' },
];

storiesOf('DeviceList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <PureDeviceList devices={defaultDevices} {...actions} />)
  .add('withOffDevices', () => <PureDeviceList devices={withOffDevices} {...actions} />)
  .add('loading', () => <PureDeviceList loading devices={[]} {...actions} />)
  .add('empty', () => <PureDeviceList devices={[]} {...actions} />);