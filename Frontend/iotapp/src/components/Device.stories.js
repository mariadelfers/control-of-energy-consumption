import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Device from './Device';

export const device = {
  id: '1',
  title: 'Test Device',
  state: 'DEVICE_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinDevice: action('onPinDevice'),
  onArchiveDevice: action('onArchiveDevice'),
};

storiesOf('Device', module)
  .add('default', () => <Device device={device} {...actions} />)
  .add('pinned', () => <Device device={{ ...device, state: 'DEVICE_PINNED' }} {...actions} />)
  .add('archived', () => <Device device={{ ...device, state: 'DEVICE_ARCHIVED' }} {...actions} />);