import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="Capa do filme" />
        <body className="movie-card-boby">
          <h4 className="movie-card-title">
            {title}
          </h4>
          <h5 className="movie-card-subtitle">
            {subtitle}
          </h5>
          <p className="movie-card-storyline">
            {storyline}
          </p>
        </body>
        <div className="movie-card-rating">
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

export default MovieCard;
