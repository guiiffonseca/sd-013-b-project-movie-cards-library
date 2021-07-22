import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <section className="movie-card">
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{rating}</p>
        <img className="movie-card-image" src={ imagePath } alt="" />
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
