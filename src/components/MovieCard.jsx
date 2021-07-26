// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
//
const MovieCard = (props) => {
  const { movie } = props;
  const { imagePath } = movie;
  const { title } = movie;
  const { subtitle } = movie;
  const { storyline } = movie;
  const { rating } = movie;

  return (
    <div>
      <img alt="Vai ler seu cego" src={ imagePath } />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={ rating } />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
