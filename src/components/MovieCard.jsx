// implement MovieCard component here

import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card movie-card-body">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        <div className="div-text">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <div className="div-storyLine">
            <p className="movie-card-storyline">{ movie.storyline }</p>
          </div>
        </div>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};

MovieCard.defautProps = {
  movie: [],
};
export default MovieCard;
