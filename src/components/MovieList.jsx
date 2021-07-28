import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {

    return (
      <div className='movie-list'>
        {this.props.movies.
          map(({ title, subtitle, storyline, imagePath, rating }, id) => {
            return (
              <MovieCard
                title={title}
                subtitle={subtitle}
                storyline={storyline}
                imagePath={imagePath}
                rating={rating}
                key={id} />
            )
          })}
      </div>
    )
  }
}

export default MovieList;