import React from 'react';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { subtitle, title, storyline, imagePath } = movie;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt="Filme"></img>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
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
  }).isRequired,
};

export default MovieCard;
