import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt="Movie cover" />
        <Rating rating={ rating } />
        <h4>
          {title}
        </h4>
        <h5>
          {subtitle}
        </h5>
        <p>
          {storyline}
        </p>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  title: 'Untitled',
  subtitle: 'Untitled',
  storyline: 'Untitled',
  imagePath: 'Untitled',
  rating: 'Untitled',
  movie: {},
};

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.string,
  movie: PropTypes.instanceOf(Object),
};

export default MovieCard;
