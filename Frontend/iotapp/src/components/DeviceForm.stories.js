import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorate } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import DeviceForm from './DeviceForm';

export const deviceForm = {
    device_id: '1',
    device_type: 'foco',
    device_name: 'Test Device',
};

export const actions = {
    modify: action('modify'),
    delete: action('delete'),
};

storiesOf('Form', module)
  .add('add', () => <DeviceForm />)
  .add('modify', () => <DeviceForm deviceForm={{ ...deviceForm, state: 'MODIFY' }} {...actions} />)
  .add('delete', () => <DeviceForm deviceForm={{ ...deviceForm, state: 'DELETE' }} {...actions} />);