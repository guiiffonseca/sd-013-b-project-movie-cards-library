import React from 'react';
import '../App.css';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {
          movies
            .map(({ title, subtitle, storyline, imagePath, rating }, id) => {
              return (
                <MovieCard
                  title={ title }
                  subtitle={ subtitle }
                  storyline={ storyline }
                  imagePath={ imagePath }
                  rating={ rating }
                  key={ id }
                />
              );
            })
        }
      </div>
    );
  }
}

export default MovieList;
