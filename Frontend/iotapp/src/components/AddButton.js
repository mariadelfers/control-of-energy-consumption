import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';

export default function AddButton({ addButton: name }) {
  return (
    <div className= "device-item" onClick={action("Clicked")}>
      <div class="terms">
        <img className="device-icon" src={require('../icons/otro.png')} alt="Icon"/>
        <h2 className="device-name"> {name} </h2>
      </div>
      
    </div>
  );
}

AddButton.propTypes = {
    addButton: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  };