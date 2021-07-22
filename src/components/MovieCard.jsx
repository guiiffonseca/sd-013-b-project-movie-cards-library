import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;

    return (
      <li>
        <div>
          <img src={ imagePath } alt={ `imagem do filme ${title}` } />
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
          <Rating rating={ rating } />
        </div>
      </li>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
export default MovieCard;
