import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } className="movie-card-image" />
      </div>
    );
  }
}

export default MovieCard;
