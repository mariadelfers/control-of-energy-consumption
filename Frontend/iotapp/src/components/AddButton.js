import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';

export default function AddButton({ addButton: {type, name }}) {
  let icon_type = JSON.stringify(type);
  icon_type = icon_type.substring(1);
  icon_type = icon_type.substring(0, icon_type.length - 1); 
  
  return (
    <div className="device-item" onClick={action("Clicked")}>
      <div class="terms">
        <img className="device-icon" src={require('../icons/'+ icon_type +'.png')} alt="Icon"/>
        <h2 className="device-name"> {name} </h2>
      </div>
      
    </div>
  );
}

AddButton.propTypes = {
    addButton: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };