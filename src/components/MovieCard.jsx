// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { objectMovie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = objectMovie;
    return (
      <div className="movie-card" key={ title }>
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  objectMovie: PropTypes.objectOf(
    PropTypes.shape(
      {
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieCard;
