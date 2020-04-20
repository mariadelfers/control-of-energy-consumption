import React from 'react';
import PropTypes from 'prop-types';
import Device from './Device';
import { connect } from 'react-redux';
import { offDevice, disableDevice } from '../lib/redux_device';
import { action } from '@storybook/addon-actions';

export function PureDeviceList({ loading, devices, offDevice, disableDevice }) {
  const events = {
    offDevice,
    disableDevice,
  };

  const LoadingRow = (
    <div className="device-item-empty">
      <span className="loading-device">
        <span>Loading</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="device-list">
        {LoadingRow}{LoadingRow}{LoadingRow}
        {LoadingRow}{LoadingRow}{LoadingRow}
      </div>
    );
  }

  if (devices.length === 0) {
    return (
      <div className="device-list">
        <div className="empty-message">
          <div className="title-message">No tienes dispositivos agregados</div>
          <div className="subtitle-message" onClick={action("Clicked")}>¿Deseas agregar uno?</div>
        </div>
      </div>
    );
  }

  const devicesInOrder = [
    ...devices.filter(d => d.state === 'DEVICE_OFF'),
    ...devices.filter(d => d.state !== 'DEVICE_OFF'),
  ];

  return (
    <div className="device-list">
        <div className="device-items">
        {devicesInOrder.map(device => (
            <Device key={device.id} device={device} {...events} />
        ))}
        </div>
    </div>
  );
}

PureDeviceList.propTypes = {
    loading: PropTypes.bool,
    devices: PropTypes.arrayOf(Device.propTypes.device).isRequired,
    offDevice: PropTypes.func.isRequired,
    disableDevice: PropTypes.func.isRequired,
  };
  
  PureDeviceList.defaultProps = {
    loading: false,
  };
  
  export default connect(
    ({ devices }) => ({
      devices: devices.filter(d => d.state === 'DEVICE_INBOX' || d.state === 'DEVICE_OFF'),
    }),
    dispatch => ({
      deviceDisable: id => dispatch(disableDevice(id)),
      offDevice: id => dispatch(offDevice(id)),
    })
  )(PureDeviceList);
