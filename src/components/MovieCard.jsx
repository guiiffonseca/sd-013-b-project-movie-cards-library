import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline, rating } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ `${title} card` } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}
MovieCard.defaultProps = {
  movie: {},
};
MovieCard.propTypes = {
  movie: PropTypes.objectOf(String),
};
export default MovieCard;
