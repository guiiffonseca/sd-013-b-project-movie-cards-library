import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie, key } = this.props;
    return (
      <section key={ key } className="movie-card">
        <img src={ movie.imagePath } alt="" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
  key: PropTypes.string.isRequired,
};
export default MovieCard;
