// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
// import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card">
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <img src={ `${imagePath}` } alt="imagem do filme" />
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

// MovieCard.propTypes = {
// movie: PropTypes.objectOf(PropTypes.oneOfType([
// PropTypes.string,
// PropTypes.number,
// ])).isRequired,
// };

export default MovieCard;
