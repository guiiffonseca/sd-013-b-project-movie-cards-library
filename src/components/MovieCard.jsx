// implement MovieList component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    return (
      <div>
        <img src={ this.props.movie.imagePath } alt="Movie Scene" />
        <h4>{ this.props.movie.title }</h4>
        <h5>{ this.props.movie.subtitle}</h5>
        <p>{ this.props.movie.storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
