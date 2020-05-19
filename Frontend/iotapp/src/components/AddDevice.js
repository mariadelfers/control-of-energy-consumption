import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

export default function AddDevice({ addDevice: { id, type, name } }) {
  var icon_type = "otro"
  var device_type = JSON.stringify(type);
  device_type = device_type.substring(1);
  device_type = device_type.substring(0, device_type.length - 1);
  
  switch (device_type) {
    case "1":
      icon_type = "Bocina";
      break;
    case "2":
      icon_type = "Consola";
      break;
    case "3":
      icon_type = "Luz";
      break;
    case "4":
      icon_type = "TV";
      break;  
    default:
      icon_type = "otro";
      break;
  }

  return (
    <div className={"add-item"} >
      <div class="terms">
        <img className={"add-icon"} src={require('../icons/dispositivos/'+ icon_type +'.png')} alt="Icon"/>
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