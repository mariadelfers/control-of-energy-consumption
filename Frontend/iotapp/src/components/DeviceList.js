import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Device from './Device';
import { connect } from 'react-redux';
import { offDevice, disableDevice } from '../lib/redux_device';

class GenerateDeviceList extends React.Component{
  

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      error: null,
      empty: false,
      isLoaded: false,
      items: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      id: props.id_room, 
    };
  }

  componentDidMount() {
    console.log("[ID Room] " + this.state.id);
    fetch("http://localhost:5000/showAllDevice?id_room=" + this.state.id)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
        console.log("Devices:", result);
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
    const { empty, error, isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div className="load">
        <div class="loader"></div>
        Cargando dispositivos
        </div>;
    } 
    else if (items.length == 0) {
      return <div className="empty">
        <br></br>No tienes dispositivos agregados
        <br></br>¿Desea agregar uno?
        <br></br>
        <img className="empty-icon" src={require('../icons/arrow.png')} alt="Icon"/>
        </div>;
    } 
    else {

      return (
        <div className="device-list"> 
          <div className="device-items">
          {items.map(item => (
              <Device device={item}/>
            ))}
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


export function PureDeviceList({ room, loading, devices, offDevice, disableDevice, addButton }) {
  return (
    <div>
      <GenerateDeviceList id_room={room}/>
    </div>
    
  );
}

PureDeviceList.propTypes = {
    room: PropTypes.string.isRequired,
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
