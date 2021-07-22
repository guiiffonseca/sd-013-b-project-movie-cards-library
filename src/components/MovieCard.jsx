// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    return (
      <div>
        <img src={ this.props.movie.imagePath } alt="Movie Scene" />
        <h4>{ this.props.movie.title }</h4>
        <h5>{ this.props.movie.subtitle}</h5>
        <p>{ this.props.movie.storyline}</p>
        <Rating rating={ this.props.movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
