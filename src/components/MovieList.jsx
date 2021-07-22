// implement MovieList component here

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map(({ title, subtitle, storyline, imagePath, rating }, index) => (
          <MovieCard
            key={ index }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            source={ imagePath }
            rating={ rating }
          />
        )) }
      </div>
    );
  }
}

CountryList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MovieList;
