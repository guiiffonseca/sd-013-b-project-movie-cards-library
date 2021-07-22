import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

MovieList.defaultProps = {
  data: [],
};

MovieList.propTypes = {
  data: PropTypes.arrayOf(Object),
};
export default MovieList;
