// IMPORT PACKAGE REFERENCES
//import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
//import {CreateUser} from '../state/actions/user.js';

import React from 'react';
import SoldierForm from '../forms/soldier.js';

// IMPORT IMAGES

// COMPONENT

function createUser(user) {
  console.log('recerived',user)
  this.props.CreateUser(user);
}
const HomePage = () => (
  <main>
    <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
      <SoldierForm submit={createUser}/>
    </div>
  </main>
);

export {HomePage};
/*HomePage.propTypes = {*/
  //CreateUser: PropTypes.func.isRequired,
//};

//export default connect(
  //null,
  //{CreateUser},
/*)(HomePage);*/
