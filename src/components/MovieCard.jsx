// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props;
    return (
      <section key={ title } className="movie-card">
        <img
          src={ imagePath }
          alt={ `Imagem do filme ${title}` }
          className="movie-card-image"
        />
        <div className="movie-card-body">
          <h2 className="movie-card-title">{ title }</h2>
          <h3 className="movie-card-subtitle">{ subtitle }</h3>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
