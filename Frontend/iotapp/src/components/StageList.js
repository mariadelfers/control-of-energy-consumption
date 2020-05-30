import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Stage from './Stage';
import RoomScreen from './RoomScreen';
import { connect } from 'react-redux';

class GenerateStageList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id_stage:'',
      id_admin: '',
      error: null,
      isLoaded: false,
      items: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      id_admin: props.user_id, 
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/searchStage?id_admin=" + this.state.id_admin)
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

    fetch("http://localhost:5000/getStage?id_admin=" + this.state.id_admin)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          id_stage: result.id
        });
        console.log(result);
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div className="error">Error</div>;
      
    } 
    else if (!isLoaded) {
      return <div className="load">Cargando espacios...</div>;
    } 
    else {

      return (
        <div>
          <div className="stage-list"> 
            {items.map(item => (
                <Stage stage={item}/>
              ))}
          </div>
          <RoomScreen  id_stage={this.state.id_stage}/>
        </div>
      );

    }
  }
}

ReactDOM.render(
  <GenerateStageList />,
  document.getElementById('root')
);


export function StageList({user_id}) {
  return (
    <GenerateStageList user_id={user_id} />
  );
}

StageList.propTypes = {
    stages: PropTypes.arrayOf(Stage.propTypes.stage).isRequired,
  };
  
  StageList.defaultProps = {
    loading: false,
  };
  
  export default connect(
    ({ stages }) => ({
      stages: stages,
    }),

  )(StageList);
