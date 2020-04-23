import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeviceList from './DeviceList';

export function PureScreen({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="empty-message">
          <div className="title-message">Oh no!</div>
          <div className="message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="empty-message">Device box</span>
        </h1>
      </nav>
      <DeviceList />
    </div>
  );
}

PureScreen.propTypes = {
  error: PropTypes.string,
};

PureScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureScreen);