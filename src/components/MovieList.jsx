import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies.map(({ title, subtitle }) => (
          <MovieCard
            key={ title }
            movie={ subtitle }
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
        storyline: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieList;
