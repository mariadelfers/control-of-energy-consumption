import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Room from './Room';
import { connect } from 'react-redux';

class GenerateRoomList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id_stage: '',
      error: null,
      isLoaded: false,
      items: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      id_stage: props.id_stage, 
    };
  }

  componentDidMount() {
    console.log("ID stage: ", this.state.id_stage);
    fetch("http://localhost:5000/searchRoom?id_stage=" + this.state.id_stage)
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
    const { error, isLoaded, items, id_stage } = this.state;

    if (error) {
      return <div className="Error">Error</div>;
      
    } 
    else if (!isLoaded) {
      return <div>Cargando cuartos...</div>;
    } 
    else {

      return (
        <div>
          <div className="room-list"> 
            {items.map(item => (
                <Room room={item}/>
              ))}
          </div>
        </div>
      );

    }
  }
}

ReactDOM.render(
  <GenerateRoomList />,
  document.getElementById('root')
);


export function PureRoomList({ id_stage }) {
  return (
    <GenerateRoomList id_stage={id_stage}/>
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
