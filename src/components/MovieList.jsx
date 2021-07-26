import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="MovieList">
        {movies.map((movie, index) => (
          <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />
        ))}
        ;
      </main>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes
    .object).isRequired,
};

export default MovieList;
