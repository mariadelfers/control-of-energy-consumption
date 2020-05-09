import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureRoomsScreen } from './RoomScreen';
import { defaultRooms } from './RoomList.stories';

export default {
  component: PureRoomsScreen,
  title: 'RoomScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
};

const store = {
  getState: () => {
    return {
      rooms: defaultRooms,
    };
  },
  subscribe: () => 0,
};

storiesOf('RoomScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <PureRoomsScreen />)
  .add('error', () => <PureRoomsScreen error="Something" />);