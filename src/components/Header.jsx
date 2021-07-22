import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { header } = this.props;
    return (
      <header className="movie-card-header">
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

Header.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Header;
