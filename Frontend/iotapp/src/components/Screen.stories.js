import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureScreen } from './Screen';
import { defaultDevicesData } from './DeviceList.stories';

export default {
  component: PureScreen,
  title: 'Screen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
};

const store = {
  getState: () => {
    return {
      tasks: defaultDevicesData,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export const Default = () => <PureScreen />;

export const Error = () => <PureScreen error="Something" />;