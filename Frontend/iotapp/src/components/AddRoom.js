import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

class GenerateRoom extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      stage: '1'
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
  
  checkName(name, type, stage) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success', request.responseText);
        this.showAlertRepeatedName();
      } else {
        console.warn('error');
        this.createRoom(name, type, stage);
      } 
    };
    request.open('GET', 'http://localhost:5000/checkRoom?name_room=' + name);
    request.send(); 
  }

  createRoom(name, type, stage) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success', request.responseText);
        this.refreshPage();
      } else {
        console.warn('error');
      }
    };
    request.open('GET', 'http://localhost:5000/insertRoom?name='+ name +'&id_scenario='+ type +'&id_stage='+ stage);
    request.send();  
  }

  showAlertType() {
    const alert = document.getElementById("missing_type");
    alert.insertAdjacentHTML("beforeend",
    "<p id='alert'> ¡Es necesario elegir un tipo de cuarto! </p>");;
  }
  showAlertName(){
    var i = document.getElementById("missing_name");
    i.insertAdjacentHTML("beforeend",
    "<p id='alert'> ¡Es necesario escribir un nombre! </p>");
  }
  showAlertRepeatedName(){
    var i = document.getElementById("missing_name");
    i.insertAdjacentHTML("beforeend",
    "<p id='alert'> ¡Ese nombre ya existe! </p>");
  }

  deleteAlert(){
    var alert = document.getElementById("alert");
    if(alert != null){
      alert.remove(alert);
    }
  }

  insertRoom(name, type, stage){
    this.deleteAlert();
      if(type != ''){
        if(name != ''){
          this.checkName(name, type, stage);
        }
        else{
          this.showAlertName();
        }
      }
      else{
        this.showAlertType();
      }
  }

  refreshPage(){
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <Popup trigger={
          <button className={`room-item`} >
          <div class="terms">
            <img className={`room-icon`} src={require('../icons/otro.png')} alt="Icon"/>
            <h2 className="room-name"> Agregar </h2>
          </div>
        </button>
        } modal>
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>           
              <div className="header"> AÑADIR NUEVA SALA </div>
              <div className="content">

                <div className="title-form-device">
                  <div class="terms3">
                    <p className="requirement">*</p>
                    <h1 className="label-form-device"> TIPO DE SALA </h1>
                    <p className="missing-name" id="missing_type"></p>
                  </div>

                  <div class="section over-hide z-bigger">
                    <input class="checkbox" type="checkbox" name="general" id="general"></input>

                    <input class="checkbox-tools" type="radio" name="tools" id="tool-1" 
                            value="2" checked={this.state.type === "2"} onChange={this.changeRadio}></input>
                            <label class="for-checkbox-tools" for="tool-1">
                            <img className="icon-size" src={require('../icons/salas/bano.png')} alt="Icon"/>
                            <br></br>Baño
                            </label>
                            
                            <input class="checkbox-tools" type="radio" name="tools" id="tool-2"
                            value="3" checked={this.state.type === "3"} onChange={this.changeRadio}></input>
                            <label class="for-checkbox-tools" for="tool-2">
                            <img className="icon-size" src={require('../icons/salas/biblioteca.png')} alt="Icon"/>
                            Biblioteca
                            </label>

                            <input class="checkbox-tools" type="radio" name="tools" id="tool-3" 
                            value="4" checked={this.state.type === "4"} onChange={this.changeRadio}></input>
                            <label class="for-checkbox-tools" for="tool-3">
                            <img className="icon-size" src={require('../icons/salas/cocina.png')} alt="Icon"/>
                            Cocina
                            </label>

                            <input class="checkbox-tools" type="radio" name="tools" id="tool-4"
                            value="5" checked={this.state.type === "5"} onChange={this.changeRadio}></input>
                            <label class="for-checkbox-tools" for="tool-4">
                            <img className="icon-size" src={require('../icons/salas/comedor.png')} alt="Icon"/>
                            Comedor
                            </label>

                            <input class="checkbox-tools" type="radio" name="tools" id="tool-5"
                            value="6" checked={this.state.type === "6"} onChange={this.changeRadio}></input>
                            <label class="for-checkbox-tools" for="tool-5">
                            <img className="icon-size" src={require('../icons/salas/cuarto.png')} alt="Icon"/>
                            Cuarto
                            </label>

                    <input class="checkbox-tools" type="radio" name="tools" id="tool-6" 
                    value="7" checked={this.state.type === "7"} onChange={this.changeRadio}></input>
                    <label class="for-checkbox-tools" for="tool-1">
                    <img className="icon-size" src={require('../icons/salas/escaleras.png')} alt="Icon"/>
                    Escaleras
                    </label>

                    <input class="checkbox-tools" type="radio" name="tools" id="tool-7" 
                    value="8" checked={this.state.type === "8"} onChange={this.changeRadio}></input>
                    <label class="for-checkbox-tools" for="tool-1">
                    <img className="icon-size" src={require('../icons/salas/estudio.png')} alt="Icon"/>
                    Estudio
                    </label>

                    <input class="checkbox-tools" type="radio" name="tools" id="tool-8" 
                    value="9" checked={this.state.type === "9"} onChange={this.changeRadio}></input>
                    <label class="for-checkbox-tools" for="tool-8">
                    <img className="icon-size" src={require('../icons/salas/gym.png')} alt="Icon"/>
                    <br></br>Gym
                    </label>

                    <input class="checkbox-tools" type="radio" name="tools" id="tool-9" 
                    value="10" checked={this.state.type === "10"} onChange={this.changeRadio}></input>
                    <label class="for-checkbox-tools" for="tool-9">
                    <img className="icon-size" src={require('../icons/salas/jardin.png')} alt="Icon"/>
                    Jardín
                    </label>

                    <input class="checkbox-tools" type="radio" name="tools" id="tool-10" 
                    value="11" checked={this.state.type === "11"} onChange={this.changeRadio}></input>
                    <label class="for-checkbox-tools" for="tool-10">
                    <img className="icon-size" src={require('../icons/salas/sala.png')} alt="Icon"/>
                    <br></br>Sala
                    </label>

                  </div>		

                </div>

                <div className="title-form-device">
                  <p></p><p></p>
                  <div class="terms3">
                    <p className="requirement">*</p>
                    <h1 className="label-form-device">NOMBRE DE LA SALA</h1>
                    <span className="missing-name" id="missing_name"></span>
                  </div>
                </div>
                <div>
                  <input class="input-text-device" type="text" value={this.state.name} onChange={this.changeText}></input>
                </div>
                
              </div>
              <div className="actions">
              <button onClick={() => {this.insertRoom(this.state.name, this.state.type, this.state.stage);}} className="crear"> CREAR </button>
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
  <GenerateRoom />,
  document.getElementById('root')
);


export default function AddButtonRoom() {

  return (
    <GenerateRoom />
  );
}

AddButtonRoom.propTypes = {
    addButtonRoom: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  };