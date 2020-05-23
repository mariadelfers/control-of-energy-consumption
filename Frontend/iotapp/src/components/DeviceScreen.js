import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeviceList from './DeviceList';

export function PureDeviceScreen({ error, room }) {
  var id_room = JSON.stringify(room)
  var str_room = id_room.toString(id_room);
  str_room =  str_room.substring(8, str_room.length-1);
  if (error) {
    return (
      <div className="screen-error-device">
        <div className="empty-message">
          <div className="title-message">¡Oh no!</div>
          <div className="message">Algo salió mal.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-device">
      <nav>
        <h1 className="screen-title">
          <span className="screen-message">Dispositivos</span>
          <span className="screen-place">{str_room} [ Sala de medios ]</span>
        </h1>
      </nav>
      <DeviceList room={str_room}/>
    </div>
  );
}

PureDeviceScreen.propTypes = {
  error: PropTypes.string,
};

PureDeviceScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureDeviceScreen);