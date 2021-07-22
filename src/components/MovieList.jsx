// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

export default class MovieList extends React.Component {
  render() {
    // console.log(this.props.movies[0].title);
    return (
      <div className="caixa-filme">
        <h1>

          Movies Card

        </h1>

        {movies.map((movie) => (

          <MovieCard
            key={ `${movie.title}` }
            movie={ movie }

          />
        ))}

      </div>
    );
  }
}
