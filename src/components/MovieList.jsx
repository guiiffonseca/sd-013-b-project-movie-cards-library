import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <main className='movie-list'>
        Lista de filmes
      </main>
    );
  };
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

export default MovieList;
