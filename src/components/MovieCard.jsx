import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <h4 className="movie-card-title">
          { title }
        </h4>
        <h5 className="movie-card-subtitle">
          { subtitle }
        </h5>
        <p className="movie-card-storyline">
          { storyline }
        </p>
        <img
          className="movie-card-image"
          src={ imagePath }
          alt={ title }
        />
        <Rating
          rating={ rating }
          key={ title }
        />
      </div>
    );
  }
}

MovieCard.propTypes = {
  // title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
