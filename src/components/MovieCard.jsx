import React from 'react';
import MovieList from './MovieList';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <img src={imagePath} />
    )
  }
};

export default MovieCard;
