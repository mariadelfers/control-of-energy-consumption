import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureRoomList } from './RoomList';
import { room } from './Room.stories';
import { addButton } from './AddButton.stories';

export const defaultRooms = [
  { ...room, id: '1', name: 'Sala', type: 'sala' },
  { ...room, id: '2', name: 'Baño', type: 'bano' },
  { ...room, id: '3', name: 'Cocina', type: 'cocina' },
  { ...room, id: '4', name: 'Mi cuarto', type: 'cuarto' },
  { ...room, id: '5', name: 'Jardín', type: 'jardin' },
];

export const rooms = [
  { ...room, id: '1', name: 'Sala', type: 'sala' },
  { ...room, id: '2', name: 'Baño', type: 'bano' },
  { ...room, id: '3', name: 'Cocina', type: 'cocina' },
  { ...room, id: '4', name: 'Mi cuarto', type: 'cuarto' },
  { ...room, id: '5', name: 'Jardín', type: 'jardin' },
];

export const defaultAddButton = [
  { ...addButton, name: 'Nueva Sala' },
];

storiesOf('RoomList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <PureRoomList rooms={rooms} button={defaultAddButton}/>)