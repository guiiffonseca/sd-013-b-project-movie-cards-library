import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {
      movie: {
        title,
        subtitle,
        storyline,
        rating,
        imagePath,
      } } = this.props;

    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="" />
        <h1 className="movie-card-title">{ title }</h1>
        <h3 className="movie-card-subtitle">{ subtitle }</h3>
        <p className="movie-card-storyline">{ storyline }</p>
        <footer className="movie-card-rating">
          <Rating rating={ rating } />
        </footer>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
export default MovieCard;
