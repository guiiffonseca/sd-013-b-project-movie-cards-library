import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        { movies.map(({ movie }) => (
          <MovieCard
            key={ movie.title }
            movie={ movie }
          />
        ))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieList;
