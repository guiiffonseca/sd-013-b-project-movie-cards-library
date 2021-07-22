import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        {/* <Rating /> */}
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movie: Proptypes.shape({
//     title: Proptypes.string,
//     subtitle: Proptypes.string,
//     storyline: Proptypes.string,
//     imagePath: Proptypes.string,
//     rating: Proptypes.number,
//   }).isRequired,
// };

export default MovieCard;
