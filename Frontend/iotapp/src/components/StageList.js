import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Stage from './Stage';
import { connect } from 'react-redux';

class GenerateStageList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/showAllStage")
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
      return <div className="error">Error</div>;
      
    } 
    else if (!isLoaded) {
      return <div className="load">Cargando espacios...</div>;
    } 
    else {

      return (
        <div className="stage-list"> 
          <div className="stage-items">
          {items.map(item => (
              <Stage stage={item}/>
            ))}
          </div>
        </div>
       
      );

    }
  }
}

ReactDOM.render(
  <GenerateStageList />,
  document.getElementById('root')
);


export function PureStageList() {
  return (
    <GenerateStageList />
  );
}

PureStageList.propTypes = {
    stages: PropTypes.arrayOf(Stage.propTypes.stage).isRequired,
  };
  
  PureStageList.defaultProps = {
    loading: false,
  };
  
  export default connect(
    ({ stages }) => ({
      stages: stages,
    }),

  )(PureStageList);
