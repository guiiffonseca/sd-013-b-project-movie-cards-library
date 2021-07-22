// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map(({ title, subtitle, storyline, rating, imagePath }) => (
          <div className="movie-card" key={ title }>
            <img className="movie-card-image" src={ imagePath } alt={ title } />
            <h2 className="movie-card-title">{ title }</h2>
            <h5 className="movie-card-subtitle">{ subtitle }</h5>
            <p className="movie-card-storyline">{ storyline }</p>
            <p className="rating">{ rating }</p>
          </div>
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieList;
