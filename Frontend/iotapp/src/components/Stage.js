import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';

class StageComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      type: '',
      items: [],
      things: []
    };
  }
  static getDerivedStateFromProps(props, state) {
      return {
        id: props.id_stage,
        name: props.name_stage,
        type: props.type_stage  
      };
    }
    
    componentDidMount(){
      fetch("http://localhost:5000/stageCountDevices?stage_id_stage=" + this.state.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.items
          });
          // console.log(result);
        }
      ) 

      fetch("http://localhost:5000/stageCountUsers?stage_id_stage=" + this.state.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            things: result.things
          });
          console.log(result);
        }
      ) 
    }
  
  render(){
    const { items, things } = this.state;
    return (
      <div>
          <div className="stage-item">
            <div className="stage-name">
              {this.state.name}
            </div>
              {items.map(d => (
                <div className="stage-devices">
                  {d.devices} Dispositivos conectados
                </div>)
              )}
              {things.map(u => (
                <div className="stage-users">
                  {u.users} Usuarios agregados
                </div>)
              )}

          </div>
      </div>
  
    );
  }

}

ReactDOM.render(
  <StageComponent />,
  document.getElementById('root')
);

export default function Stage({ stage: { id, type, name} }) {
  return (
    <div>
      <StageComponent id_stage={id} type_stage={type} name_stage={name} />
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