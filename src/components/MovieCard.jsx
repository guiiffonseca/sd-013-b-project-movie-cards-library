import React from 'react';
// import PropTypes from 'prop-types';
// import MovieList from './MovieList';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <img src={ imagePath } alt=""/>
    );
  }
}

export default MovieCard;
