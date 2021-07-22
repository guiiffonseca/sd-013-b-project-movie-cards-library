// implement MovieCard component here
import React, { Component } from 'react';
import propTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <img src={ imagePath } alt="movie cover" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.exact({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    rating: propTypes.string.isRequired,
    pathImage: propTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
