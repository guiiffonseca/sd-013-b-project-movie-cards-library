// implement MovieCard component heere
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { title, imagePath, subtitle, storyline, rating },
    } = this.props;
    return (
      <li>
        <h4>
          {title}
        </h4>
        <h5>
          {subtitle}
        </h5>
        <img src={ imagePath } alt={ title } />
        <p>
          {storyline}
        </p>
        <Rating rating={ rating } />
      </li>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
