import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

class GenerateUser extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      password: ''
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    this.setState({name: event.target.value});
  }


  createUser(username, name, email, password) {
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
    request.open('GET', 'http://localhost:5000/insert?name='+ name +'&email='+ email +'&username='+ username +'&password='+ password +'&admin=1');
    request.send();  
  }

  render() {
    return (
      <div>
        <Popup trigger={
            <button >
                <img className={`device-icon`} src={require('../icons/otro.png')} alt="Icon"/>
                <h2 className="device-name"> Agregar usuario</h2>
            </button>
        } modal>
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>           
              <div className="header"> AÑADIR NUEVO USUARIO </div>
              <div className="content">

                <div className="title-form-device">
                  <div class="terms3">
                    <p className="requirement">*</p>
                    <h1 className="label-form-device"> TIPO DE SALA </h1>
                  </div>
                </div>

   
                <div className="title-form-device">
                  <p></p><p></p>
                  <div class="terms3">
                    <p className="requirement">*</p>
                    <h1 className="label-form-device">NOMBRE DE LA SALA</h1>
                  </div>
                </div>
                <div>
                  <input class="input-text-device" type="text" value={this.state.name} onChange={this.changeText}></input>
                </div>
                
              </div>
              <div className="actions">
                <button onClick={() => {this.createUser(this.state.name, this.state.type); close();}} className="crear"> CREAR </button>
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
  <GenerateUser />,
  document.getElementById('root')
);


export default function AddUser() {

  return (
    <GenerateUser />
  );
}

AddUser.propTypes = {
    addUser: PropTypes.shape({
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
  };