import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const {movies} = this.props;
    return (
      <div className= 'movie-list'>
        {movies.map(({title, subtitle, storyline, imagePath, rating}) => (
          <MovieCard key = {title} subtitle = {subtitle} storyline = {storyline} imagePath = {imagePath} rating = {rating} />
        ))}
      </div>
    )
  }

}
export default MovieList;