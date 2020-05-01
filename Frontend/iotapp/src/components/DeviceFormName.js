import React from 'react';
import PropTypes from 'prop-types';

export default function DeviceFormName() {
    return (
      <div className="form-device">
  
        <div className="title-form-device">
          <h1 className="label-form-device">Nombre del dispositivo: </h1>
        </div>
  
        <div>
            <input class="input-text-device" type="text"></input>
        </div>
  
      </div>
    );
  }
  
  DeviceFormName.propTypes = {
      deviceFormName: PropTypes.shape({
        deviceName: PropTypes.string.isRequired,
      }),
      repeatedName: PropTypes.func,
    };