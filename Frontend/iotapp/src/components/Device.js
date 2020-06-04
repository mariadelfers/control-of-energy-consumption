import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

export default function Device({ device: { id, type, name, state }, offDevice, disabledDevice }){
  var icon_type = "otro"
  var device_type = JSON.stringify(type);


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
      icon_type = "blank";
      break;
  }

  function deleteDevice(id){
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('deleted', request.responseText);
        refreshPage();
      } else {
        console.warn('error');
      }
    };
    request.open('GET', 'http://localhost:5000/deleteDevice?id_device='+ id);
    request.send(); 
  }

  function getType(type){
    var device_type = JSON.stringify(type);
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
        icon_type = "blank";
        break;
    }
    return icon_type;
  }
  function refreshPage(){
    window.location.reload(false);
  }
  return (
    <div>
    <Popup trigger={
      <button className={`device-item ${state}`} >
      <div class="terms">
        <img className={`device-icon ${state}`} src={require('../icons/dispositivos/' + icon_type + '.png')} alt="Icon"/>
        <h2 className="device-name"> {name} </h2>
      </div>
    </button>
    } modal>
      {close => (
        <div className="modal-info">
          <a className="close" onClick={close}>
            &times;
          </a> 
          <div className="content">
            <div class="terms">
              <img className="icon-info" src={require('../icons/dispositivos/'+ icon_type +'.png')} alt="Icon"/>
                Nombre: {name} <br></br>
                Tipo: {getType(type)} <br></br>
            </div> 
          </div>
          <div className="actions">
            <button className="eliminar" onClick={() => { deleteDevice(id); close();}}> Eliminar </button>
            <button className="modificar" onClick={close}> Modificar </button>
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