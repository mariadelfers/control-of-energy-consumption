import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddButtonRoom from './AddRoom';
import RoomList from './RoomList';

export function PureRoomScreen({id_stage}) {
  // if (error) {
  //   return (
  //     <div className="screen-error-device">
  //       <div className="empty-message">
  //         <div className="title-message">¡Oh no!</div>
  //         <div className="message">Algo salió mal.</div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="screen-room">
      <nav>
        <h1 className="screen-title">
          <span className="screen-message">Salas</span>
        </h1>
      </nav>
      <RoomList stage={id_stage}/>
      <AddButtonRoom addButtonRoom={{}} />
    </div>
  );
}

PureRoomScreen.propTypes = {
  error: PropTypes.string,
};

PureRoomScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureRoomScreen);