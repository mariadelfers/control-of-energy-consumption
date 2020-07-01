import React, {Component} from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Profile from '../components/Profile';

export default function Homepage({ user: { id, type } }) {

  
    return (
      <div>
         <Profile user_id={"1"} />
      </div>
  
    );
  }
  
  Homepage.propTypes = {
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    };