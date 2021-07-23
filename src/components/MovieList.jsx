// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            title={ movie.title }
            subtitle={ movie.subtitle }
            storyline={ movie.storyline }
            rating={ movie.rating }
            src={ movie.imagePath }
          />
        )) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string,
      },
    ),
  ),
};

MovieList.defaultProps = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        rating: 0,
        imagePath: '0',
      },
    ),
  ),
};

export default MovieList;
