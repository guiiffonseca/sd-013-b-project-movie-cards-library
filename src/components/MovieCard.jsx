// implement MovieCard component here

import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {/* <img src={ movie.imagePath } alt={ movie.title } /> */}
        {/* <h4>{ movie.title }</h4> */}
        {/* <h5>{ movie.subtitle }</h5> */}
        <span>{ movie.storyline }</span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};

MovieCard.defautProps = {
  movie: {},
};
export default MovieCard;
