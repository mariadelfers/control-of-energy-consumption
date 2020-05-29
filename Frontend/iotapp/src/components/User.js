import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user: { name, email } }){
  return (
    <div>
        {name}
    </div>
  );
}

User.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
};