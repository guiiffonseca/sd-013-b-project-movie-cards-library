import React from 'react';
import PropTypes from 'prop-types';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf,
};

export default MovieList;
