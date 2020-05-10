import React from 'react';
import PropTypes from 'prop-types';
import Room from './Room';
import { room } from './Room.stories';
import AddButton from './AddButton';
import { connect } from 'react-redux';
import { action } from '@storybook/addon-actions';

export function PureRoomList({ roomms, addButton }) {

  const rooms = [
    { ...room, id: '1', name: 'Sala', type: 'sala' },
    { ...room, id: '2', name: 'Baño', type: 'bano' },
    { ...room, id: '3', name: 'Cocina', type: 'cocina' },
    { ...room, id: '4', name: 'Mi cuarto', type: 'cuarto' },
  ];

  if (rooms.length === 0) {
    return (
      <div className="device-list">
        <div className="empty-message">
          <div className="title-message">No tienes dispositivos agregados</div>
          <div lcassName="subtitle-message" onClick={action("Clicked")}>¿Deseas agregar uno?</div>
        </div>
      </div>
    );
  }

  return (
    <div className="room-list">
        <div className="device-items">
        {rooms.map(room => (
            <Room key={room.id} room={room} />
        ))}
        <AddButton addButton={addButton} />
        </div>
    </div>
  );
}

PureRoomList.propTypes = {
    rooms: PropTypes.arrayOf(Room.propTypes.room).isRequired,
  };
  
  PureRoomList.defaultProps = {
    loading: false,
  };
  
  export default connect(
    ({ rooms }) => ({
      rooms: rooms,
    }),

  )(PureRoomList);
