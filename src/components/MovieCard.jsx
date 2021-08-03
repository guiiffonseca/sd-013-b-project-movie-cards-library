// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const {
      movie: { title, subtitle, storyline, imagePath, rating },
    } = this.props;
    return (
      <div className="movieCard">
        <img src={ imagePath } alt="imagem do filminho" />
        <div className="movieCardBody">
          <h4 className="movieCardTitle">{title}</h4>
          <h5 className="movieCardSubtitle">{subtitle}</h5>
          <p className="movieCardStoryline">{storyline}</p>
        </div>
        <div className="movieCardRating">{rating}</div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
