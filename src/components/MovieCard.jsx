// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;

    return (

      <section className="cardFilme">
        <img src={ imagePath } alt="filme" />
        <h4>
          {' '}
          {title}
        </h4>
        <h5>
          {' '}
          {subtitle}
          {' '}
        </h5>
        <p>{storyline}</p>
      </section>
    // a
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({

      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieCard;
