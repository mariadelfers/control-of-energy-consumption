import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddButton from './AddDevice';
import DeviceList from './DeviceList';

function getName(id){
  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }
    if (request.status === 200) {
      console.log('[*]', request.responseText);
      var device_name = request.responseText;
      device_name = JSON.stringify(device_name);
      device_name = device_name.toString(device_name);
      device_name = device_name.substring(13, device_name.length-6);
      var i = document.getElementById("name");
      i.insertAdjacentHTML("afterbegin",
      "<span> [ " + device_name + " ]</span>");
    } else {
      console.warn('error');
    }
  };
  request.open('GET', 'http://localhost:5000/getNameRoom?id_room=1');
  request.send(); 
}

export function PureDeviceScreen({ error, room }) {
  var id_room = JSON.stringify(room)
  if (error) {
    return (
      <div className="screen-error-device">
        <div className="empty-message">
          <div className="title-message">¡Oh no!</div>
          <div className="message">Algo salió mal.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-device">
      <nav>
        <h1 className="screen-title">
          <span className="screen-message">Dispositivos</span>
          {getName(id_room)}
          <span className="screen-place" id="name"></span>
        </h1>
      </nav>
      <DeviceList room={id_room}/>
      <AddButton addButton={{}} />
    </div>
  );
}

PureDeviceScreen.propTypes = {
  error: PropTypes.string,
};

PureDeviceScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureDeviceScreen);