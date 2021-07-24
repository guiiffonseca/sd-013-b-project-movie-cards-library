import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {movies.map(({ title, subtitle, storyline, rating, imagePath }) => (<MovieCard
          key={ title }
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          imagePath={ imagePath }
          rating={ rating }
        />))}
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieList;
