import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import AddUser from './AddUser';
import User from './User';
import StageList from './StageList';
import { connect } from 'react-redux';

class ProfileComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      error: null,
      isLoaded: false,
      items: [],
      user:[]
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      id: props.user_id, 
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/showAllUser?id_admin=" +  this.state.id)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      //  console.log(result);
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

    fetch("http://localhost:5000/searchAdmin?id_admin=" + this.state.id)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          user: result.user
        });
      //  console.log(result);
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, items, user } = this.state;

    if (error) {
      return <div className="Error">Error</div>;
      
    } 
    else if (!isLoaded) {
      return <div>Cargando perfil...</div>;
    } 
    else {

      return (
        <div>
        <div className="profile">
          <div className="photo">
            <img className="icon-photo" src={require('../icons/user1.png')} alt="Icon"/>
          </div>
          <div> 
          {user.map(u => (
            <div className="profile-name">
              {u.name} 
              <p>{u.email}</p>
            </div>)
           )}
          </div>
          <div>
            <img className="icon-decor" src={require('../icons/decor.png')} alt="Icon"/>
          </div>
          <div className="users-title">
          <AddUser /> 
          </div>
          <div className="profile-users">           
              {items.map(item => (
                  <User user={item}/>
                ))}
          </div>
        </div>
        
      </div>
      );

    }
  }
}

ReactDOM.render(
  <ProfileComponent />,
  document.getElementById('root')
);


export function Profile({user_id}) {
  return (
    <ProfileComponent user_id={user_id}/>
  );
}

Profile.propTypes = {
  users: PropTypes.arrayOf(User.propTypes.user).isRequired,
};
  
  Profile.defaultProps = {
    loading: false,
  };
  
  export default connect(
    ({ users }) => ({
      users: users,
    }),

  )(Profile);
