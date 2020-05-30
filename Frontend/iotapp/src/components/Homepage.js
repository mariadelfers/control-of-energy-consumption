import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeviceScreen from './DeviceScreen';
import RoomScreen from './RoomScreen';
import Profile from './Profile';
import StageList from './StageList';

export default function Homepage({ user: { id, type } }) {

  
    return (
      <div>
            <Profile user_id={"1"} />
            {/* <StageList />          
            <DeviceScreen room={{room:'1'}}/>
            <RoomScreen /> */}
      </div>
  
    );
  }
  
  Homepage.propTypes = {
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    };