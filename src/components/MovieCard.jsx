// implement MovieCard component here

import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <img src={ movies.imagePath } alt={ movies.title } />
        <h4>{ movies.title }</h4>
        <h5>{ movies.subtitle }</h5>
        <p>{ movies.storyline }</p>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};
MovieCard.defautProps = {
  movies: {},
};
export default MovieCard;
