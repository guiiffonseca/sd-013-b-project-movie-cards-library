import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    return (
      <div className="movie-card movie-card-body">
        <img src={ imagePath } alt="" className="movie-card-image" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
