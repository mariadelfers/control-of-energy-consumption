import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorate } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import AddButton from './AddButton';

export const addButton = {
  id: '1',
  type: 'otro',
  name: 'Otro cuarto',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

storiesOf('Add Button', module)
  .add('default', () => <AddButton addButton={{ ...addButton, name: text("Name device", "Test device"),
    decorators: [withKnobs]}}/>)
