// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      movies.map(({ title, subtitle, imagePath, rating, storyline }) => (
        <section key={ title } className="movie-card">
          <img src={ imagePath } alt="test" className="movie-card-image " />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <h2 className="rating">{rating}</h2>
        </section>
      )));
  }
}

export default MovieCard;
