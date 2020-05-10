import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorate } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import AddButton from './AddButton';

export const addButton = {
   name: 'Nuevo cuarto',
};

storiesOf('Add Button', module)
  .add('default', () => <AddButton addButton={{ ...addButton}} />)
