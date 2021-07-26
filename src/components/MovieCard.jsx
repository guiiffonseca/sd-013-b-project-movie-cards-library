// implement MovieCard component heere
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { title, imagePath },
    } = this.props;
    return (
      <li>
        <h4>
          {title}
        </h4>
        <img src={ imagePath } alt={ title } />
      </li>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
