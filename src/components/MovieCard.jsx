import React from 'react';
// import PropTypes from 'prop-types';
// import MovieList from './MovieList';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
    <div>
      <img src={ imagePath } alt=""/>
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
      <Rating rating={rating} />
    </div>
    );
  }
}

export default MovieCard;
