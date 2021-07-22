// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props;
    return (
      <section className="movie-card">
        <div>
          <img src={ imagePath } alt="Lorem Ipsum" className="movie-card-image" />
        </div>
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
      </section>
    );
  }
}

export default MovieCard;
