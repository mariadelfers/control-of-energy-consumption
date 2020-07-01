import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user: { name, email } }){
  return (
    <div>
        <img className="user-photo" src={require('../icons/user3.png')} alt="Icon"/>
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