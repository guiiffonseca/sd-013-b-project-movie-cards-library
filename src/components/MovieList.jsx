// implement MovieList component here
import React, { Component } from 'react';
import movies from '../data';

class MovieList extends Component {
  render() {
    // const { title, subtitle, storyline, rating, imagePath } = movies;
    return (
      <div>
        { movies.map(({ title, subtitle, storyline, rating, imagePath }, index) => (
          <section key={ index }>
            <img source={ imagePath } alt="Movie illustration.png" />
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
            <p>{storyline}</p>
            <div>{rating}</div>
          </section>
        )) }
      </div>
    );
  }
}

export default MovieList;
