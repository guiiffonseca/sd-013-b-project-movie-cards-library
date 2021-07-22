import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard movie={ movie } key={ movie.title } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [
    {
      title: 'Movie Title 1',
      subtitle: 'Movie Subtitle 1',
      storyline: 'Movie Storyline 1',
      rating: 4.5,
      imagePath: 'images/movie_1',
    },
    {
      title: 'Movie Title 2',
      subtitle: 'Movie Subtitle 2',
      storyline: 'Movie Storyline 2',
      rating: 4.5,
      imagePath: 'images/movie_2',
    },
    {
      title: 'Movie Title 3',
      subtitle: 'Movie Subtitle 3',
      storyline: 'Movie Storyline 3',
      ratingThree: 3,
      imagePath: 'images/movie_3',
    },
  ],
};

export default MovieList;
