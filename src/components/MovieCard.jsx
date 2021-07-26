// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, imagePath, storyline, rating } } = this.props;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt="Capa do filme" />
        <div className="movie-card-body">
          <h4>
            { title }
          </h4>
          <h5>
            { subtitle }
          </h5>
          <p>
            { storyline }
          </p>
        </div>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
