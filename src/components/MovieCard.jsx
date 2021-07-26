import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movieCard">
        <img src={ movie.imagePath } alt="capa do filme" />
        <h4 className="title">{ movie.title }</h4>
        <h5 className="subtitle">{ movie.subtitle }</h5>
        <p className="movieText">
          { movie.storyline }
        </p>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default MovieCard;
