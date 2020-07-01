import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import DeviceFormType from './DeviceFormType';



export const actions = {
  
};

storiesOf('Form add: Type', module)
  .add('default', () => <DeviceFormType/>);