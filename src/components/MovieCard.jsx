// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card movie-card-body">
        <img
          className="movie-card-image"
          src={ movie.imagePath }
          alt={ `${movie.title} ${movie.subtitle}.` }
        />
        <h1 className="movie-card-title">{ movie.title }</h1>
        <h3 className="movie-card-subtitle">{ movie.subtitle }</h3>
        <p className="movie-card-storyline">{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </div>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default MovieCard;
