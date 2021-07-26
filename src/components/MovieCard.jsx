import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <p>
          {movie.title}
          <br />
          {movie.subtitle}
          <br />
          {movie.storyline}
          <br />
          {movie.rating}
        </p>
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
