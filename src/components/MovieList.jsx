import React, { Component } from 'react';
import propTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movieData } = this.props;

    return (
      <ul className="movie-list">
        {movieData.map((movie, index) => (
          <li className="movie-card movie-card-body" key={ index }>
            <img
              src={ movie.imagePath }
              alt={ movie.title }
              className="movie-card-image"
            />
            <h2 className="movie-card-title">{ movie.title }</h2>
            <h3 className="movie-card-subtitle">{ movie.subtitle }</h3>
            <p className="movie-card-storyline">{ movie.storyline }</p>
            <div className="movie-card-rating">
              <span className="rating">{movie.rating}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movieData: propTypes.arrayOf({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    imagePath: propTypes.string.isRequired,
  }).isRequired,
};

export default MovieList;
