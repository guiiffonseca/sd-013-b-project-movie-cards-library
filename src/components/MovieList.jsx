import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf( // checagem utilizada para arrays
    PropTypes.shape({ // Checagem utiliada para objetos
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired, // Dessa forma o 'is.Required' pega todo o conjunto de propTypes e aplica a obrigatoriedade.
};

export default MovieList;
