import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
  <div>
    <Link to="/dashboard">
      <h1>My Application</h1>
    </Link>
  </div>
);

export const ConnectedNavigation = connect(state => state) (Navigation); // shorthand for mapStateToProps which maps Redux store state to the props of this connected component