// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// A função a seguir foi feita com base no exemplo Country List mostrado em aula
// (https://github.com/tryber/sd-013-b-live-lectures/blob/lecture/11.2/country-list/src/components/CountryCard.jsx)

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section className="movie-card">
        <div>
          <img src={ imagePath } alt="Lorem Ipsum" className="movie-card-image" />
        </div>
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <Rating
            rating={ rating }
          />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        imagePath: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieCard;
