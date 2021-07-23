// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const movie = this.props;
    return (
      <section>
        <img src={ movie.imagePath } alt="Capa do filme" />
        <h4>
          {' '}
          { movie.title }
          {' '}
        </h4>
        <h5>
          { movie.subtitle }
        </h5>
        <p>
          { movie.storyline }
        </p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  storyline: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  subtitle: 'Não possui subtítulo',
};

export default MovieCard;
