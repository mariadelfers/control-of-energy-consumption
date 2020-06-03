import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeviceScreen from './DeviceScreen';
import { render } from '@testing-library/react';
{/* <DeviceScreen id_room={1}/> */}

class ControllerComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     id: props.id_room 
  //   };
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id_room !== this.props.id_room) {
      this.setState({
        id: this.props.id_room
      });
    }
  }

  render(){
    return (
      <div className="back-screen">
        {this.state.id}
        <DeviceScreen id_room={this.state.id}/>
      </div>    
    );
  }
}

ReactDOM.render(
  <ControllerComponent />,
  document.getElementById('root')
);

export default function Controller({ id }) {
  return (
    <div>
      <ControllerComponent id_room={id}/>
    </div>
  );
}

// export default function Controller({id}){
//   return (
//     <div className="back-screen">
//         <DeviceScreen id_room={id}/>
//     </div>
    
//   );
// }

// class Controller extends React.Component {
//   render () {
//     console.log("here");
//     return <h1>Here !</h1>
//   }
// }

// export default Controller;