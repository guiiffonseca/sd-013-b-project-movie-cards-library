// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map(({ title, subtitle, storyline, rating, imagePath }) => (
          <MovieCard
            key={ title }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            rating={ rating }
            imagePath={ imagePath }
          />
        )) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        imagePath: PropTypes.string,
      },
    ),
  ).isRequired,
};

// MovieList.defaultProps = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape(
//       {
//         title: '',
//         subtitle: '',
//         storyline: '',
//         rating: number,
//         imagePath: '',
//       },
//     ),
//   )
// };

export default MovieList;
