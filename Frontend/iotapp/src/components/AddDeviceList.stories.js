import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureAddDeviceList } from './AddDeviceList';
import { addDevice} from './AddDevice.stories';

export const defaultAddDevices = [
  { ...addDevice, id: '1', name: 'Luz', type: 'Luces' },
  { ...addDevice, id: '2', name: 'TV', type: 'TV' },
  { ...addDevice, id: '3', name: 'Juego', type: 'Consolas' },
  { ...addDevice, id: '4', name: 'Bocina', type: 'Speaker' },
];


storiesOf('Add Device List', module)
  .add('default', () => <PureAddDeviceList addDevices={defaultAddDevices} />);