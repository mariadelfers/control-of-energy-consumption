import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import DeviceFormName from './DeviceFormName';


export const actions = {
  repeteadName: action('repeatedName'),
};

storiesOf('Form add: Name', module)
  .add('default', () => <DeviceFormName/>)
  