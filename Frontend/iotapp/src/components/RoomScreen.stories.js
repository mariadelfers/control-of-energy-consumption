import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureRoomScreen } from './RoomScreen';
import { defaultRooms } from './RoomList.stories';
import { defaultAddButton } from './RoomList.stories';

export default {
  component: PureRoomScreen,
  title: 'RoomScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
};

const store = {
  getState: () => {
    return {
      rooms: defaultRooms,
      button: defaultAddButton,
    };
  },
  subscribe: () => 0,
};

storiesOf('RoomScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <PureRoomScreen />)
  .add('error', () => <PureRoomScreen error="Something" />);