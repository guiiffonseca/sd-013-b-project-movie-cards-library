// implement MovieCard component here
import React, { Component } from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="movie-card movie-card-body">
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <img className="movie-card-image" src={ imagePath } alt="movie cover" />
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.exact({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
    imagePath: propTypes.string,
  }).isRequired,
};
