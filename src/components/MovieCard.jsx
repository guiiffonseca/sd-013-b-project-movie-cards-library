import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        ID/Name:
        {movie.title}
        <br />
        Subtitle:
        {movie.subtitle}
        <br />
        Resume:
        {movie.storyline}
        <br />
        Rate:
        {movie.rating}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string,
      },
    ),
  ).isRequired,
};

export default MovieCard;
