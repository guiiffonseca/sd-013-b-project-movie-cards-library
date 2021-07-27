// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// A função a seguir foi feita com base no exemplo Country List mostrado em aula
// (https://github.com/tryber/sd-013-b-live-lectures/blob/lecture/11.2/country-list/src/components/CountryList.jsx)

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            movie={ movie }
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        key: PropTypes.string.isRequired,
        movie: PropTypes.arrayOf(PropTypes.object).isRequired,
      },
    ),
  ).isRequired,
};

export default MovieList;
