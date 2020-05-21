import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Device from './Device';
import AddButton from './AddButton';
import { connect } from 'react-redux';
import { offDevice, disableDevice } from '../lib/redux_device';

class GenerateDeviceList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/showAllDevice")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
        console.log(result);
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div className="error">
        <img className="error-icon" src={require('../icons/sadface.png')} alt="Icon"/>
        <br></br>Error 
        <br></br>Sin conexión
        </div>;
    } 
    else if (!isLoaded) {
      return <div className="load">
        <div class="loader"></div>
        Cargando...
        </div>;
    } 
    else {

      return (
        <div className="device-list"> 
          <div className="device-items">
          {items.map(item => (
              <Device device={item}/>
            ))}
            <AddButton addButton={{}} />
          </div>
        </div>
       
      );

    }
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
