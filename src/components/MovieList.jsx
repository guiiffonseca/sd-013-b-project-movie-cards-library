import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movies">
        <div>
          {movies}
        </div>
      </section>
    );
  }
}

export default MovieList;
