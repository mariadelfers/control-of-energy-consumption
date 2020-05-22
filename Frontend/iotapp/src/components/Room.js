import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

export default function Room({ room: { id, type, name} }) {
  var icon_type = "otro"
  var room_type = JSON.stringify(type);

  switch (room_type) {
    case "1":
      icon_type = "otro";
      break;
    case "2":
      icon_type = "bano";
      break;
    case "3":
      icon_type = "biblioteca";
      break;
    case "4":
      icon_type = "cocina";
      break;
    case "5":
      icon_type = "comedor";
      break;
    case "6":
      icon_type = "cuarto";
      break;
    case "7":
      icon_type = "escaleras";
      break;
    case "8":
      icon_type = "estudio";
      break;
    case "9":
      icon_type = "gym";
      break;
    case "10":
      icon_type = "jardin";
      break;
    case "11":
      icon_type = "sala";
      break;
    default:
      icon_type = "otro";
      break;
  }

  function deleteRoom(id){
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('deleted', request.responseText);
      } else {
        console.warn('error');
      }
    };
    request.open('GET', 'http://localhost:5000/deleteRoom?id_room='+ id);
    request.send(); 
  }

  function getType(type){
    var room_type = JSON.stringify(type);
    switch (room_type) {
      case "1":
        icon_type = "otro";
        break;
      case "2":
        icon_type = "bano";
        break;
      case "3":
        icon_type = "biblioteca";
        break;
      case "4":
        icon_type = "cocina";
        break;
      case "5":
        icon_type = "comedor";
        break;
      case "6":
        icon_type = "cuarto";
        break;
      case "7":
        icon_type = "escaleras";
        break;
      case "8":
        icon_type = "estudio";
        break;
      case "9":
        icon_type = "gym";
        break;
      case "10":
        icon_type = "jardin";
        break;
      case "11":
        icon_type = "sala";
        break;
      default:
        icon_type = "otro";
        break;
    }
    return icon_type;
  }

  return (
    <div>

    <Popup trigger={
      <button className={`device-item`} >
      <div class="terms">
        <img className={`device-icon`} src={require('../icons/salas/'+ icon_type +'.png')} alt="Icon"/>
        <h2 className="device-name"> {name} </h2>
        <h2 className="device-count"> Dispositivos </h2>
      </div>
    </button>
    } modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>           
          <div className="content">
            <div class="terms">
              <img className="icon-info" src={require('../icons/salas/'+ icon_type +'.png')} alt="Icon"/>
                Nombre: {name} <br></br>
                Tipo: {getType(type)} <br></br>
                Sala: 
            </div> 
          </div>
          <div className="actions">
            <button className="eliminar" onClick={() => { deleteRoom(id); close();}}> Eliminar </button>
            <button className="modificar" onClick={close}> Modificar </button>
          </div>
        </div>
      )}
    </Popup>
    </div>

  );
}

Room.propTypes = {
    room: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };