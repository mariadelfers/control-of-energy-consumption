import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeviceList from './DeviceList';

export function PureMainScreen({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <DeviceList />
    </div>
  );
}

PureMainScreen.propTypes = {
  error: PropTypes.string,
};

PureMainScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureMainScreen);