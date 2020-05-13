import React from 'react';
import PropTypes from 'prop-types';
import AddDevice from './AddDevice';
import { connect } from 'react-redux';
import { action } from '@storybook/addon-actions';

export function PureAddDeviceList({addDevices}) {

  return (
    <div className="add-list">
       
        {addDevices.map(addDevice => (
            <AddDevice key={addDevice.id} addDevice={addDevice} />
        ))}    
    </div>

  );
}

PureAddDeviceList.propTypes = {
    addDevices: PropTypes.arrayOf(AddDevice.propTypes.addDevice).isRequired,
  };

  export default connect(
    ({ addDevices }) => ({
      addDevices: addDevices,
    }),
  )(PureAddDeviceList);
