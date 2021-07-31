import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt="test" className="movie-card-image " />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <div>
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}
// Referencia dos PropTypes : https://github.com/tryber/sd-013-b-project-movie-cards-library/pull/70/files, Duvida identica a minha encontrado no slack: https://trybecourse.slack.com/archives/C020YFJ19DF/p1627167542498300
// Material de estudo : https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
