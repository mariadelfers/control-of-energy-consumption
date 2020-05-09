import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeviceList from './DeviceList';

export function PureDeviceScreen({ error }) {
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
          <span className="screen-place">   [ Sala de medios ]</span>
        </h1>
      </nav>
      <DeviceList />
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