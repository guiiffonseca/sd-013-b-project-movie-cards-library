import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './Rating';

class MovieCard extends React.Component {
  render() {
    const { oneMovie } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ oneMovie.imagePath } alt="movie poster" />
        <h4 className="movie-card-title">{ oneMovie.title }</h4>
        <h5 className="movie-card-subtitle">{ oneMovie.subtitle }</h5>
        <p className="movie-card-subtitle">{ oneMovie.storyline }</p>
        <Ratings rate={ oneMovie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  oneMovie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
