import React from 'react';
import MovieCard from './MovieCard';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const {movies} = this.props;
    return (
      <div>
        { movies.map(({title}) =>(
          <MovieCard key={ title } />
        ))}
      </div>
      // <MovieCard key={teste}/>
      // <MovieCard key={yeah}/>
    );
  }
}

export default MovieList;
