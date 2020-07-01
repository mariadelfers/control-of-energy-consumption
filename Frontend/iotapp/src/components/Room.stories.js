import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorate } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import Room from './Room';

export const room = {
  id: '1',
  type: 'sala',
  name: 'Test Device',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

storiesOf('Room', module)
  .add('default', () => <Room room={{ ...room}}/>);