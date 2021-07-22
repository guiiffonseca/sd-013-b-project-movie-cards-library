import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { allMovies } = this.props;
    return (
      <div className="movie-list">
        { allMovies.map((movie) => <MovieCard oneMovie={ movie } key={ movie.title } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  allMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
