import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureDeviceList } from './DeviceList';
import { deviceData, actionsData } from './Device.stories';

export const defaultDevicesData = [
  { ...deviceData, id: '1', name: 'Device 1' },
  { ...deviceData, id: '2', name: 'Device 2' },
  { ...deviceData, id: '3', name: 'Device 3' },
  { ...deviceData, id: '4', name: 'Device 4' },
  { ...deviceData, id: '5', name: 'Device 5' },
  { ...deviceData, id: '6', name: 'Device 6' },
];

export const withOffDevices = [
  ...defaultDevicesData.slice(0, 5),
  { id: '6', name: 'Device 6 (off)', state: 'DEVICE_OFF' },
  { id: '1', name: 'Device 1 (off)', state: 'DEVICE_OFF' },
];

export const Default = () => <PureDeviceList devices={defaultDevicesData} {...actionsData} />;

export const WithOffDevices = () => <PureDeviceList devices={withOffDevices} {...actionsData} />;

export const Loading = () => <PureDeviceList loading devices={[]} {...actionsData} />;

export const Empty = () => <PureDeviceList devices={[]} {...actionsData} />;