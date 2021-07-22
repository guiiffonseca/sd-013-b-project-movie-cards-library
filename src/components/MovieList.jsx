import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className='movie-list'>
        {movies.map(({ title, subtitle, storyline, rating, imagePath }) => (
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
