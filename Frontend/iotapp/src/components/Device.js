import React from 'react';
import PropTypes from 'prop-types';
import Foco from '../icons/bocina.svg';
import { action } from '@storybook/addon-actions';

export default function Device({ device: { id, type, name, state }, offDevice, disabledDevice }) {
  return (
    <div className={`device-item ${state}`} onClick={action("Clicked")}>

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
    offDevice: PropTypes.func,
    disabledDevice: PropTypes.func,
  };