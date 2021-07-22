import React from 'react';
import MovieCard from './MovieCard';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map(({ title }) => (
          <MovieCard key={ title } />
        ))}
      </div>
    );
  }
}

export default MovieList;
