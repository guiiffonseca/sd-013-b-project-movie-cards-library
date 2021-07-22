// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <img src={ movie.source } alt={ movie.altText } />
        <div>
          <h4>{ movie.title }</h4>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.description }</p>
        </div>
        <div>
          <Rating rating={ movie.rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    source: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
