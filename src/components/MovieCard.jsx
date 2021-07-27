// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = movies;
    // console.log(movies);
    console.log(this.props);
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="Apenas uma imagem" />
        <div className="movie-card-information">
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <span>{rating}</span>
        </div>
      </div>
    );
  }
}

export default MovieCard;
