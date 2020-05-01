import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import DeviceFormType from './DeviceFormType';

export const deviceFormType = {
  type: 'Type Device',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  
};

storiesOf('Form add: Type', module)
  .add('default', () => <DeviceFormType deviceFormType={deviceFormType} {...actions} />);