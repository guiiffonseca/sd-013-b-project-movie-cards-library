// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movies;
    return (
      <section>
        <img src={ imagePath } alt="" />
        <h4 className=".page-title">{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movies: [
    {
      title: 'Movie Title 1',
      subtitle: 'Movie Subtitle 1',
      storyline: 'Movie Storyline 1',
      rating: 4.5,
      imagePath: 'images/movie_1',
    },
    {
      title: 'Movie Title 2',
      subtitle: 'Movie Subtitle 2',
      storyline: 'Movie Storyline 2',
      rating: 4.5,
      imagePath: 'images/movie_2',
    },
    {
      title: 'Movie Title 3',
      subtitle: 'Movie Subtitle 3',
      storyline: 'Movie Storyline 3',
      ratingThree: 4.5,
      imagePath: 'images/movie_3',
    },
  ],
};

export default MovieCard;
