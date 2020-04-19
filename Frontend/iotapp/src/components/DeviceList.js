import React from 'react';
import PropTypes from 'prop-types';
import Device from './Device';
import { connect } from 'react-redux';
import { offDevice, disableDevice } from '../lib/redux_device';

export function PureDeviceList({ loading, devices, offDevice, disableDevice }) {
  const events = {
    offDevice,
    disableDevice,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="device-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (devices.length === 0) {
    return (
      <div className="device-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const devicesInOrder = [
    ...devices.filter(d => d.state === 'DEVICE_OFF'),
    ...devices.filter(d => d.state !== 'DEVICE_OFF'),
  ];

  return (
    <div className="device-items">
      {devicesInOrder.map(device => (
        <Device key={device.id} device={device} {...events} />
      ))}
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
