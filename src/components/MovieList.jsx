// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <section className="movie-list">
        {
          movies.map((movie, key = movie.title) => (
            // Passar um objeto movie inteiro
            <MovieCard
              movie={ movie }
              key={ key }
            />
          ))
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
