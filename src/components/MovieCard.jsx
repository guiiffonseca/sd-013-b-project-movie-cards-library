// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
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

export default MovieCard;
