// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // console.log(this.props.movies[0].title);
    const { movies } = this.props;

    return (
      <div className="caixa-filme">
        <h1>

          Movies Card

        </h1>

        {movies.map((movie) => (

          <MovieCard
            key={ movie.title }
            movie={ movie }

          />
        ))}

      </div>
    );
  }
}

MovieList.propTypes = {

  movies: PropTypes.string.isRequired,

};
export default MovieList;
