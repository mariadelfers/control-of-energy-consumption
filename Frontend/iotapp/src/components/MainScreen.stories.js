import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureMainScreen } from './MainScreen';
import { defaultDevicesData } from './DeviceList.stories';

export default {
  component: PureMainScreen,
  title: 'MainScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
};

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      devices: defaultDevicesData,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export const Default = () => <PureMainScreen />;

export const Error = () => <PureMainScreen error="Something" />;