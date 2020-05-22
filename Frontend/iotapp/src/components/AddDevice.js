import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import AddDevice from './AddDevice';

class GenerateDevice extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: ''
    };
    this.changeText = this.changeText.bind(this);
    this.changeRadio = this.changeRadio.bind(this);
  }

  changeText(event) {
    this.setState({name: event.target.value});
  }

  changeRadio(event) {
    this.setState({type: event.target.value});
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

                  <div class="section over-hide z-bigger">
                    <input class="checkbox" type="checkbox" name="general" id="general"></input>
                            
                            <input class="checkbox-tools" type="radio" name="tools" id="tool-1" 
                            value="1" checked={this.state.type === "1"} onChange={this.changeRadio}></input>
                            <label class="for-checkbox-tools" for="tool-1">
                            <img src={require('../icons/dispositivos/Bocina.png')} alt="Icon"/>
                            Bocina
                            </label>

                            <input class="checkbox-tools" type="radio" name="tools" id="tool-2"
                            value="2" checked={this.state.type === "2"} onChange={this.changeRadio}></input>
                            <label class="for-checkbox-tools" for="tool-2">
                            <img src={require('../icons/dispositivos/Consola.png')} alt="Icon"/>
                            Consola
                            </label>

                            <input class="checkbox-tools" type="radio" name="tools" id="tool-3"
                            value="3" checked={this.state.type === "3"} onChange={this.changeRadio}></input>
                            <label class="for-checkbox-tools" for="tool-3">
                            <img src={require('../icons/dispositivos/Luz.png')} alt="Icon"/>
                            Luz
                            </label>

                            <input class="checkbox-tools" type="radio" name="tools" id="tool-4"
                            value="4" checked={this.state.type === "4"} onChange={this.changeRadio}></input>
                            <label class="for-checkbox-tools" for="tool-4">
                            <img src={require('../icons/dispositivos/TV.png')} alt="Icon"/>
                            Televisión
                            </label>
                  </div>		

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
                <button onClick={() => {this.createDevice(this.state.name, this.state.type);  close();}} className="crear"> CREAR </button>
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