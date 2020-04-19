import React from 'react';
import PropTypes from 'prop-types';

export default function Device({ device: { id, title, state }, onArchiveDevice, onPinDevice }) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'DEVICE_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveDevice(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'DEVICE_ARCHIVED' && (
          <a onClick={() => onPinDevice(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

Device.propTypes = {
    device: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    onArchiveDevice: PropTypes.func,
    onPinDevice: PropTypes.func,
  };