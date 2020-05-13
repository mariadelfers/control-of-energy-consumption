import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

export default function AddDevice({ addDevice: { id, type, name } }) {
  let icon_type = JSON.stringify(type);
  icon_type = icon_type.substring(1);
  icon_type = icon_type.substring(0, icon_type.length - 1); 
  

  return (
    <div className={"add-item"} >
      <div class="terms">
        <img className={"add-icon"} src={require('../icons/'+ icon_type +'.png')} alt="Icon"/>
        <h2 className="add-name"> {name} </h2>
      </div>
    </div>
  );
}

AddDevice.propTypes = {
    addDevice: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };