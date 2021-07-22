// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt="Imagem do filme" className="movie-card-image" />
        <div className="movie-card-body">
          <h3 className="movie-card-title">{ title }</h3>
          <h4 className="movie-card-subtitle">{ subtitle }</h4>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <section className="movie-card-rating">
          Rating
          <div className="rating">{ rating }</div>
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
