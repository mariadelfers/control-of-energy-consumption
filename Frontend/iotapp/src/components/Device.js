import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

export default function Device({ device: { id, type, name, state }, offDevice, disabledDevice }) {
  let icon_type = JSON.stringify(type);
  icon_type = icon_type.substring(1);
  icon_type = icon_type.substring(0, icon_type.length - 1); 
  

  return (
    <div className={`device-item ${state}`} onClick={action("Clicked")}>
      <div class="terms">
        <img className={`device-icon ${state}`} src={require('../icons/'+ icon_type +'.svg')} alt="Icon"/>
        <h2 className="device-name"> {name} </h2>
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