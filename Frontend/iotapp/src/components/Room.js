import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';

class RoomComponent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      type: '',
      items: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      id: props.id_room,
      name: props.name_room,
      type: props.type_room  
    };
  }
  
  componentDidMount(){
    fetch("http://localhost:5000/countDevices?id_room=" + this.state.id)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          items: result.items
        });
        // console.log(result);
      }
    ) 
  }
   
  deleteRoom(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('deleted', request.responseText);
        this.refreshPage();
      } else {
        console.warn('error');
      }
    };
    request.open('GET', 'http://localhost:5000/deleteRoom?id_room='+ this.state.id);
    request.send(); 
  }

  getType(){
    var icon_type = "blank"
    var room_type = JSON.stringify(this.state.type);
    switch (room_type) {
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
        icon_type = "blank";
        break;
    }
    return icon_type;
  }

  refreshPage(){
    window.location.reload(false);
  }
  ret
  
  render() {
    const { items } = this.state;
      return (
        <div>

        <Popup trigger={
          <button className={`room-item`} >
          <div class="terms">
            <img className={`room-icon`} src={require('../icons/salas/' + this.getType() + '.png')} alt="Icon"/>
            <h2 className="room-name">{this.state.name}
            {items.map(d => (
              <h1 className="device-count">
                {d.devices} <p>Dispositivos</p> 
              </h1>)
            )}
            </h2>
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
                  <img className="icon-info" src={require('../icons/salas/'+ this.getType() + '.png')} alt="Icon"/>
                    Nombre: {this.state.name} <br></br>
                    Tipo: {this.getType()} <br></br>
                    Sala: 
                </div> 
              </div>
              <div className="actions">
                <button className="eliminar" onClick={() => { this.deleteRoom(); close();}}> Eliminar </button>
                <button className="ver" onClick={close}> Ver dispositivos </button>
              </div>
            </div>
          )}
        </Popup>
        </div>

      );
  }
}

ReactDOM.render(
  <RoomComponent />,
  document.getElementById('root')
);

export default function Room({ room: { id, type, name} }) {

  return (
    <RoomComponent id_room={id} type_room={type} name_room={name} />
  );
}

Room.propTypes = {
    room: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };

