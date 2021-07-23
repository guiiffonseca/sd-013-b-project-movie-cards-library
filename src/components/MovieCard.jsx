// implement MovieCard component here
import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card movie-card-body">
        <h4 className="movia-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <img className="movie-card-image" src={ `${imagePath}` } alt="imagem do filme" />
        <p className="movie-card-storyline">{ storyline }</p>
        <div className="movie-card-rating">
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
    imagePath: propTypes.string,
  }).isRequired,
};

export default MovieCard;
