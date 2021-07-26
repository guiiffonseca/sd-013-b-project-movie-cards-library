import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie, key } = this.props;

    return (
      <div className="movie-card">
        <p>
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
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  key: PropTypes.string.isRequired,
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
