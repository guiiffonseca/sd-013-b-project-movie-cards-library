import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        { movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            imagePath={ movie.imagePath }
            title={ movie.title }
            subtitle={ movie.subtitle }
            storyline={ movie.storyline }
            rating={ movie.rating }
          />
        )) }
      </section>
    );
  }
}

export default MovieList;
