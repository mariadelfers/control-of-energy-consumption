import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Device from './Device';
import AddButton from './AddButton';
import { connect } from 'react-redux';
import { offDevice, disableDevice } from '../lib/redux_device';

class GenerateDeviceList extends React.Component{
  
  constructor(props){
    super(props)
    this.devices = {}
  }
  getDevices() {
    fetch('http://localhost:5000/showAllDevice')
      .then((response) => {
        return response.json()
      })
      .then((devices) => {
         devices = devices 
      })  
  }

  render() {
    return (
      <div className="device-list">
         <button onClick={this.getDevices} className="crear"> Get devices </button>
        {/* {devices.map(device => (
            <Device key={device.id} device={device} />
        ))} */}
        <AddButton addButton={{}} />
      </div>
    );
  }
}

ReactDOM.render(
  <GenerateDeviceList />,
  document.getElementById('root')
);


export function PureDeviceList({ loading, devices, offDevice, disableDevice, addButton }) {
  return (
    <GenerateDeviceList />
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
