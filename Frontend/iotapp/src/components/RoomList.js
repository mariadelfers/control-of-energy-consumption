import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Room from './Room';
import { connect } from 'react-redux';

class GenerateRoomList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/showAllRoom")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
        console.log(result);
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
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div className="Error">Error</div>;
      
    } 
    else if (!isLoaded) {
      return <div>Cargando cuartos...</div>;
    } 
    else {

      return (
        <div className="room-list"> 
          {items.map(item => (
              <Room room={item}/>
            ))}
        </div>
       
      );

    }
  }
}

ReactDOM.render(
  <GenerateRoomList />,
  document.getElementById('root')
);


export function PureRoomList({ loading, devices, offDevice, disableDevice, addButton }) {
  return (
    <GenerateRoomList />
  );
}

PureRoomList.propTypes = {
    rooms: PropTypes.arrayOf(Room.propTypes.room).isRequired,
  };
  
  PureRoomList.defaultProps = {
    loading: false,
  };
  
  export default connect(
    ({ rooms }) => ({
      rooms: rooms,
    }),

  )(PureRoomList);
