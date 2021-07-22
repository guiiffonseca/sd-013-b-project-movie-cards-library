import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const p = this.props;
    const list = p.movies;
    // prettier-ignore
    const renderCards = () => list.map((x) => <MovieCard key={ x.title } />);
    return (
      <div>
        MovieList:
        {renderCards()}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieList;
