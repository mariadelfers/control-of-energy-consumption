import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import AddUser from './AddUser';

class ProfileComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <div className="profile">
          <div className="photo">
            <img className="icon-photo" src={require('../icons/foto.png')} alt="Icon"/>
          </div>
          <div className="profile-name"> 
            Name 
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
      </div>
    );
  }
}

ReactDOM.render(
  <ProfileComponent />,
  document.getElementById('root')
);
export default function Profile({ user: { id, type, name} }) {
  return (
    <ProfileComponent />
  );
}

Profile.propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };