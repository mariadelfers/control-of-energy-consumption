import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { PureAddDeviceList } from './AddDeviceList';


export const addDevice = {
  id: '1',
  type: 'Luces',
  name: 'Foco',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const defaultDevices = [
  { ...addDevice, id: '1', name: 'Luz', type: 'Luces' },
  { ...addDevice, id: '2', name: 'TV', type: 'TV' },
  { ...addDevice, id: '3', name: 'Juego', type: 'Consolas' },
  { ...addDevice, id: '4', name: 'Bocina', type: 'Speaker' },
];

class GenerateDevice extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '1'
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    this.setState({name: event.target.value});
  }

  createDevice(name, type) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success', request.responseText);
      } else {
        console.warn('error');
      }
    };
    request.open('GET', 'http://localhost:5000/insertDevice?name_device='+ name +'&id_room=1&type_idtype='+ type);
    //request.open('GET', 'http://localhost:5000/showAllDevice');
    request.send();  
  }

  render() {
    return (
      <div>
        <Popup trigger={
          <button className={`device-item`} >
          <div class="terms">
            <img className={`device-icon`} src={require('../icons/otro.png')} alt="Icon"/>
            <h2 className="device-name"> Agregar </h2>
          </div>
        </button>
        } modal>
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>           
              <div className="header"> AÑADIR NUEVO DISPOSITIVO </div>
              <div className="content">

                <div className="title-form-device">
                  <div class="terms3">
                    <p className="requirement">*</p>
                    <h1 className="label-form-device"> TIPO DE DISPOSITIVO </h1>
                  </div>
                  <PureAddDeviceList addDevices={defaultDevices}/>
                  
                </div>

                <div className="title-form-device">
                  <p></p><p></p>
                  <div class="terms3">
                    <p className="requirement">*</p>
                    <h1 className="label-form-device">NOMBRE DEL DISPOSITIVO</h1>
                  </div>
                </div>
                <div>
                  <input class="input-text-device" type="text" value={this.state.name} onChange={this.changeText}></input>
                </div>
                
              </div>
              <div className="actions">
                <button onClick={() => {this.createDevice(this.state.name)}} className="crear"> CREAR </button>
                <div class="terms3">
                    <p className="requirementc">*</p>
                    <p className="campos">Campos obligatorios.</p>
                  </div>
              </div>
            </div>
          )}
        </Popup>

      </div>
    );
  }
}

ReactDOM.render(
  <GenerateDevice />,
  document.getElementById('root')
);


export default function AddButton() {

  return (
    <GenerateDevice />
  );
}

AddButton.propTypes = {
    addButton: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  };