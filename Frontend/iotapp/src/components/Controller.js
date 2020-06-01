import React from 'react';
import PropTypes from 'prop-types';
import DeviceScreen from './DeviceScreen';
import RoomScreen from './RoomScreen';

export default function Controller({id}){
  
  return (
    <div>
       <RoomScreen id_stage={1}/>
       <DeviceScreen id_room={1}/>
    </div>
  );
}
  
Controller.propTypes = {
    id: PropTypes.string.isRequired,
};

