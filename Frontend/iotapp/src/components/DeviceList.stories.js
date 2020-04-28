import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureDeviceList } from './DeviceList';
import { device, actions } from './Device.stories';

export const defaultDevices = [
  { ...device, id: '1', name: 'Device 1' },
  { ...device, id: '2', name: 'Device 2' },
  { ...device, id: '3', name: 'Device 3' },
  { ...device, id: '4', name: 'Device 4' },
  { ...device, id: '5', name: 'Device 5' },
  { ...device, id: '6', name: 'Device 6' },
];

export const withOffDevices = [
  ...defaultDevices.slice(0, 5),
  { id: '6', name: 'Device 6 (off)', state: 'DEVICE_OFF' },
  { id: '1', name: 'Device 1 (off)', state: 'DEVICE_OFF' },
];

storiesOf('DeviceList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <PureDeviceList devices={defaultDevices} {...actions} />)
  .add('withOffDevices', () => <PureDeviceList devices={withOffDevices} {...actions} />)
  .add('loading', () => <PureDeviceList loading devices={[]} {...actions} />)
  .add('empty', () => <PureDeviceList devices={[]} {...actions} />);