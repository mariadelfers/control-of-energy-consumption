import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureRoomList } from './RoomList';
import { room} from './Room.stories';

export const defaultRooms = [
  { ...room, id: '1', name: 'Sala', type: 'sala' },
  { ...room, id: '2', name: 'Baño', type: 'bano' },
  { ...room, id: '3', name: 'Cocina', type: 'cocina' },
  { ...room, id: '4', name: 'Mi cuarto', type: 'cuarto' },
  { ...room, id: '5', name: 'Jardín', type: 'jardin' },
];


storiesOf('RoomList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <PureRoomList rooms={defaultRooms}/>);