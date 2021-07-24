import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const {movie} = this.props;
    return (
      <div className= 'movie-list'>
        {movie.map(({title, subtitle, storyline, imagePath}) => (
          <MovieCard key = {title} subtitle = {subtitle} storyline = {storyline} imagePath = {imagePath} />
        ))}
      </div>
    )
  }

}
export default MovieList;