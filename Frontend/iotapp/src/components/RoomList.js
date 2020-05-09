import React from 'react';
import PropTypes from 'prop-types';
import Room from './Room';
import { connect } from 'react-redux';
import { action } from '@storybook/addon-actions';

export function PureRoomList({rooms}) {


  if (rooms.length === 0) {
    return (
      <div className="device-list">
        <div className="empty-message">
          <div className="title-message">No tienes cuartos agregados</div>
          <div className="subtitle-message" onClick={action("Clicked")}>¿Deseas agregar uno?</div>
        </div>
      </div>
    );
  }



  return (
    <div className="device-list">
        <div className="device-items">
        {rooms.map(room => (
            <Room key={room.id} room={room} />
        ))}
        </div>
    </div>
  );
}

PureRoomList.propTypes = {
    rooms: PropTypes.arrayOf(Room.propTypes.room).isRequired,
  };
  

  export default connect(
    ({ rooms }) => ({
      rooms: rooms,
    }),
  )(PureRoomList);
