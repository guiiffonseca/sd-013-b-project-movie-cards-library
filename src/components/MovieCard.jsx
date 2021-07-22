import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.subtitle } />
        <h4>{movie.title}</h4>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.InstanceOf(Array).isRequired,
};

export default MovieCard;
