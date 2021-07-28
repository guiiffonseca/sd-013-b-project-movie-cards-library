// implement MovieCard component here
import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie, key } = this.props;
    console.log(movie);
    console.log(key);
    // console.log(this.props);
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={ movie.imagePath }
          alt="Apenas uma imagem"
        />
        <div className="movie-card-information">
          <h4>{ movie.title }</h4>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.storyline }</p>
          <Rating className="rating" rating={ movie.rating } />
          <span>{ movie.rating }</span>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(String).isRequired,
  key: PropTypes.string,
};

MovieCard.defaultProps = {
  key: PropTypes.string,
};

export default MovieCard;
