
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import DeviceFormName from './DeviceFormName';

export const deviceFormName = {
  name: 'Name Device',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  repeteadName: action('repeatedName'),
};

storiesOf('Device - Name form', module)
  .add('default', () => <DeviceFormName deviceFormName={deviceFormName} {...actions} />)
  .add('repetead', () => <DeviceFormName deviceFormName={deviceFormName} {...actions} />);