import React from 'react';
import PropTypes from 'prop-types';
import AddUser from './AddUser';

export default function Profile({ user: { id, type, name} }) {

  return (
    <div className="profile">
        <div className="photo">
            <img className="icon-photo" src={require('../icons/foto.png')} alt="Icon"/>
        </div>
        <div className="profile-name"> 
            {name} 
            <p>Correo electronico</p>
        </div>
        <div>
            <img className="icon-decor" src={require('../icons/decor.png')} alt="Icon"/>
        </div>
        <div className="profile-users">
            Usuarios
        </div>
        <AddUser /> 
    </div>
  );
}

Profile.propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };