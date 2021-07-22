import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (<MovieCard key={ movie.title } />))}
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: null,
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(Object),
};
export default MovieList;
