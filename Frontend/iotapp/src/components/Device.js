import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

export default function Device({ device: { id, type, name, state }, offDevice, disabledDevice }) {
  let icon_type = JSON.stringify(type);
  icon_type = icon_type.substring(1);
  icon_type = icon_type.substring(0, icon_type.length - 1); 
  

  return (
    <div>

    <Popup trigger={
      <button className={`device-item ${state}`} >
      <div class="terms">
        <img className={`device-icon ${state}`} src={require('../icons/'+ icon_type +'.svg')} alt="Icon"/>
        <h2 className="device-name"> {name} </h2>
      </div>
    </button>
    } modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>           
          <div className="header"> {name} </div>
          <div className="content">
            {" "}
            <img className={`device-icon ${state}`} src={require('../icons/'+ icon_type +'.svg')} alt="Icon"/>
            Tipo: {type}
          </div>
          <div className="actions">
            <button className="button"> Modificar </button>
            <button className="button"> Eliminar </button>
          </div>
        </div>
      )}
    </Popup>
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