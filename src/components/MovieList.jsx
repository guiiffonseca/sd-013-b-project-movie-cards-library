import React from 'react';
import PropTypes from 'prop-types';
// import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, param } = this.props;

    return (
      <div>
        <p>
          Texto:
          { param }
        </p>
        <p>
          { typeof movies }
        </p>
        {/* <MovieCard /> */}
      </div>
    );
  }
}

MovieList.propTypes = {
  param: PropTypes.string.isRequired,
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
  ).isRequired,
};

export default MovieList;
