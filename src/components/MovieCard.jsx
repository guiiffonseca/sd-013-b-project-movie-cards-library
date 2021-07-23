import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="movie-card">
        <h4>
          {title}
        </h4>
        <h1>
          {subtitle}
        </h1>
        <p>{storyline}</p>
        <img src={ imagePath } alt="" />
        <p>{rating}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieCard;
