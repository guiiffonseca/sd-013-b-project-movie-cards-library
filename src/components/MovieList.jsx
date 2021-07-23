import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';


class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        { movies.map(({ title, subtitle, storyline, imagePath, rating }) =>
          <MovieCard
           key = {title}
           subtitle = {subtitle}
           story = {storyline}
           image = {imagePath}
           ratin = {rating}
          />)}
      </div>
    );
  }
}

export default MovieList;
