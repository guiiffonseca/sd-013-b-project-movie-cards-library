// implement MovieList component here

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class Movielist extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

Movielist.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movielist;
