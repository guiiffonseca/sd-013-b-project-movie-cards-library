import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt="capa do filme" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.node.isRequired,
};

export default MovieCard;
