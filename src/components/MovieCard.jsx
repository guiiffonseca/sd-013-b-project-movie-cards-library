import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { props } = this;
    const { title, subtitle, storyline, imagePath, rating } = props.movie;
    return (
      <div className="movie-card movie-card-body">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={ imagePath } alt="" className="movie-card-image" />
        {rating}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.isRequired,
};

export default MovieCard;
