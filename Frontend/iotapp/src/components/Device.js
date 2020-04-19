import React from 'react';
import PropTypes from 'prop-types';
import Foco from '../icons/foco.png';

export default function Device({ device: { id, type, name, state }, onArchiveDevice, onPinDevice }) {
  return (
    <div className={`device-item ${state}`}>

      <div>
        <img className="device-icon" src={Foco}/>
      </div>

      <div className="device-name">
        <h2> {name} </h2>
      </div>

    </div>
  );
}

Device.propTypes = {
    device: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    onArchiveDevice: PropTypes.func,
    onPinDevice: PropTypes.func,
  };