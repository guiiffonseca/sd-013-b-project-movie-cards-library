import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyline, rating } = movie;
    return (
      <div className="movie-card">
        <p>{ title }</p>
        <img src={ imagePath } alt={ title } />
        <p>{subtitle}</p>
        {storyline}
        {rating}
      </div>
    );
  }
}

export default MovieCard;
