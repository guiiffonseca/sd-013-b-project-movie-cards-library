import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (movies.map(
      ({ title, subtitle, storyline, ratingThree, imagePath }, index) => (<MovieCard
        key={ title }
        title={ title }
        subtitle={ subtitle }
        storyline={ storyline }
        ratingThree={ ratingThree }
        imagePath={ imagePath }
      />))
    );
  }
}


MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
