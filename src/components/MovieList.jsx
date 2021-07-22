import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        <p>{movies.title}</p>
      </section>
    );
  }
}

export default MovieList;
