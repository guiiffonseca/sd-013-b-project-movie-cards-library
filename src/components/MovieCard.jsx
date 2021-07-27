// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      movies.map(({title, subtitle, imagePath, rating, storyline},index) => (
        <section key={ index } className="movie-card">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h2>{storyline}</h2>
          <h2>{rating}</h2>
        </section>
      )));
  }
}

export default MovieCard;
