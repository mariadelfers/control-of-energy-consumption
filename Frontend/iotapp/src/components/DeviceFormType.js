import React from 'react';
import PropTypes from 'prop-types';
import Device from './Device';
import { PureDeviceList } from './DeviceList';

export const device = {
    id: '1',
    type: 'foco',
    name: 'Foco',
    state: 'DEVICE_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  };

  export const defaultDevices = [
    { ...device, id: '1', name: 'Foco', type: 'foco' },
    { ...device, id: '2', name: 'Aire', type: 'aire-acondicionado' },
    { ...device, id: '3', name: 'Asistente', type: 'alexa' },
    { ...device, id: '4', name: 'Camara', type: 'security-camara' },

    { ...device, id: '5', name: 'Bocinas', type: 'bocina' },
    { ...device, id: '6', name: 'Tv', type: 'tv' },
    { ...device, id: '7', name: 'Laptop', type: 'laptop' },
    { ...device, id: '8', name: 'Impresora', type: 'impresora' },
    { ...device, id: '9', name: 'Consola', type: 'juego' },
    { ...device, id: '10', name: 'Tableta', type: 'tablet' },

    
    { ...device, id: '11', name: 'Cafetera', type: 'cafe' },
    { ...device, id: '12', name: 'Refrigerador', type: 'refrigerador' },
    
  ];

export default function DeviceFormType() {
    
    return (
        <div>
            <div className="title-form-device">
                <h1 className="label-form-device">Tipo del dispositivo: </h1>
                <input class="input-search-device" type="text" placeholder=" Buscar"></input>
           
                <PureDeviceList devices={defaultDevices}/>
                    {/* <div className="device-items">
                        <Device device={{ ...device, name: 'Foco', type: 'foco'}}/>   
                    </div>
                    <div className="device-items">
                        <Device device={{ ...device, name: 'Laptop', type: 'laptop'}}/>   
                    </div>
                    <div className="device-items">
                        <Device device={{ ...device, name: 'Tv', type: 'tv'}}/>   
                    </div>
                    <div className="device-items">
                        <Device device={{ ...device, name: 'Bocinas', type: 'bocina'}}/>   
                    </div>
                    <div className="device-items">
                        <Device device={{ ...device, name: 'Cafetera', type: 'coffee'}}/>   
                    </div> */}
            </div>
        </div>
    );
  }
  
  DeviceFormType.propTypes = {
    deviceFormType: PropTypes.shape({
        deviceType: PropTypes.string.isRequired,
      }),
    };