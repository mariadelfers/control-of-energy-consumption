import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Device from './Device';
import AddButton from './AddDevice';
import { connect } from 'react-redux';
import { offDevice, disableDevice } from '../lib/redux_device';

class GenerateDeviceList extends React.Component{
  

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      error: null,
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
    console.log("[1] id room: " + this.state.id);
    fetch("http://localhost:5000/showAllDevice?id_room=1" + this.state.id)
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
        Cargando dispositivos
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
