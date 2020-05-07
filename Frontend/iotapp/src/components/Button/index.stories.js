import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Atoms|Button', module)
    .add('Primary', () => ( <
        Button buttonType = 'primary'
        onClick = { action('click') } >
        Agregar <
        /Button>
    ))
    .add('Secondary', () => ( <
        Button buttonType = 'secondary'
        onClick = { action('click') } >
        Agregar <
        /Button>
    ))