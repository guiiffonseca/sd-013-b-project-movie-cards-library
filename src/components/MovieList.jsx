import React from 'react';
import PropTypes from 'prop-types';
import MovieCart from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie, index) => (
        <MovieCart key={ index } data={ movie } />
      ))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        imagePath: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieList;
