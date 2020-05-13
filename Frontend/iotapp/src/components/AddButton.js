import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { PureAddDeviceList } from './AddDeviceList';
import { action } from '@storybook/addon-actions';

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

export const defaultDevices2 = [
  { ...addDevice, id: '1', name: 'Luz', type: 'Luces' },
  { ...addDevice, id: '2', name: 'TV', type: 'TV' },
  { ...addDevice, id: '3', name: 'Juego', type: 'Consolas' },
  { ...addDevice, id: '4', name: 'Bocina', type: 'Speaker' },
];


export default function AddButton({ addButton: name }) {
  return (
    <div>

    <Popup trigger={
      <button className={`device-item`} >
      <div class="terms">
        <img className={`device-icon`} src={require('../icons/otro.png')} alt="Icon"/>
        <h2 className="device-name"> {name} </h2>
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
              <PureAddDeviceList addDevices={defaultDevices2}/>
            </div>

            <div className="title-form-device">
              <p></p><p></p>
              <div class="terms3">
                <p className="requirement">*</p>
                <h1 className="label-form-device">NOMBRE DEL DISPOSITIVO</h1>
              </div>
            </div>
            <div>
              <input class="input-text-device" type="text"></input>
            </div>
            
          </div>
          <div className="actions">
            <button className="crear"> CREAR </button>
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

AddButton.propTypes = {
    addButton: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  };