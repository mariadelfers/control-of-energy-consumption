import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorate } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import AddDevice from './AddDevice';

export const addDevice = {
  id: '1',
  type: 'Luces',
  name: 'Test Device',
  state: 'DEVICE_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

storiesOf('Add Device', module)
  .add('default', () => <AddDevice addDevice={{ ...addDevice}} />);