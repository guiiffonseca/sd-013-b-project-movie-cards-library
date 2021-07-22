import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map(({ title, subtitle, storyline, imagePath, rating }) => (
          <MovieCard
            key={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            imagePath={ imagePath }
            rating={ rating }
          />
        )) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
