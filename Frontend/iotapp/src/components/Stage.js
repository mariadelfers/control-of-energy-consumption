import React from 'react';
import PropTypes from 'prop-types';

export default function Stage({ stage: { id, type, name} }) {

  return (
    <div>
        <div className="stage-item">
          <div className="stage-name">
            {name}
          </div>
          <div className="stage-devices">
            Dispositivos conectados
          </div>
          <div className="stage-users">
            Usuarios agregados
          </div>
        </div>
    </div>

  );
}

Stage.propTypes = {
    stage: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };