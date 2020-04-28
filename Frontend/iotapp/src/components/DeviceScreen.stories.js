import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureDeviceScreen } from './DeviceScreen';
import { defaultDevices } from './DeviceList.stories';

export default {
  component: PureDeviceScreen,
  title: 'DeviceScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
};

const store = {
  getState: () => {
    return {
      devices: defaultDevices,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

storiesOf('DeviceScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <PureDeviceScreen />)
  .add('error', () => <PureDeviceScreen error="Something" />);