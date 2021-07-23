import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    console.log(this.props);
    return (
      <div key={ title } className="movie-card ">
        <img src={ imagePath } alt="foto do filme" />
        <h4>
          { title }
        </h4>
        <h5>
          {subtitle}
        </h5>
        <p>
          {storyline}
        </p>
        {rating}
      </div>);
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};
