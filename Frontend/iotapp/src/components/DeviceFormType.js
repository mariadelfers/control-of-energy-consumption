import React from 'react';
import PropTypes from 'prop-types';
import Device from './Device';

export default function DeviceFormType({ deviceFormType: {deviceType} }) {
    return (
        <div>
            <div className="title-form-device">
                <h1 className="label-form-device">Tipo del dispositivo: </h1>
                <input class="input-search-device" type="text" placeholder=" Buscar"></input>
           

            <link rel="stylesheet" href="/path/to/flickity.css" media="screen"></link>
            <script src="/path/to/flickity.pkgd.min.js"></script>
            <div class="main-gallery js-flickity"
                data-flickity-options='{ "cellAlign": "left", "contain": true }'></div>

                <div class="gallery js-flickity">
                    <div class="gallery-cell"></div>
                    <div class="gallery-cell"></div>
                    <div class="gallery-cell"></div>
                    <div class="gallery-cell"></div>
                    <div class="gallery-cell"></div>
                    <div class="gallery-cell"></div>
                    <div class="gallery-cell"></div>
                </div>
            </div>
        </div>
    );
  }
  
  DeviceFormType.propTypes = {
    deviceFormType: PropTypes.shape({
        deviceType: PropTypes.string.isRequired,
      }),
    };