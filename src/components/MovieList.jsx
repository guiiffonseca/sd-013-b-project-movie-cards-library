import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    const { movies } = this.props;
    return (
      <div className='movie-list'>
        {movies.map((movie) => (
          <MovieCard
            key={title}
            title={title}
            subtitle={subtitle}
            storyline={storyline}
            rating={rating}
            imagePath={imagePath}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
