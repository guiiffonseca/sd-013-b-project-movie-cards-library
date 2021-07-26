import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const param = 'Texting';

    return (
      <div>
        { typeof movies }
        { typeof param }
        <MovieCard movie={ movies[0].title } />
        <MovieCard movie={ movies[1].title } />
        <MovieCard movie={ movies[2].title } />
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
  ).isRequired,
};

export default MovieList;
