// implement Header component here
import React, { Component } from 'react';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

Header.propTypes = {
  text: propTypes.string.isRequired,
};


export default Header;
