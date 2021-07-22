// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      movies.map(({ title, subtitle, storyline, imagePath }, index) => {
        return (
          <section key={ index } className="movie-card">
            <img
              src={ imagePath }
              alt={ `Imagem do filme ${title}` }
              className="movie-card-image"
            />
            <div className="movie-card-body">
              <h2 className="movie-card-title">{ title }</h2>
              <h3 className="movie-card-subtitle">{ subtitle }</h3>
              <p className="movie-card-storyline">{ storyline }</p>
            </div>
          </section>
        );
      })
    );
  }
}

export default MovieCard;
