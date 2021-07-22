// implement MovieCard component here
import React, { Component } from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <img src={ imagePath } alt="movie cover" />
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
