import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCart extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-list">
        <div className="movie-card">
          <div className="movie-card-body">
            <h4 className="movie-card-title">{ movie.title }</h4>
            <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
            <p className="movie-card-storyline">{ movie.storyline }</p>
          </div>
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
          <Rating rating={ movie.rating } />
        </div>
      </div>
    );
  }
}

MovieCart.propTypes = {
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

export default MovieCart;
