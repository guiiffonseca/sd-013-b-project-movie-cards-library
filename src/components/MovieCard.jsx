import React from 'react';
import Rating from './Rating';
import movies from '../data';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        {movies.map(({ title, subtitle, storyline, imagePath }, index) => (
          <div key={ index } className="movie-card">
            {title}
            {subtitle}
            {storyline}
            {imagePath}
            <Rating />
          </div>))}
      </div>
    );
  }
}

export default MovieCard;
