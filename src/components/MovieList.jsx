import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const p = this.props;
    const list = p.movies;
    return (
      <div>
        MovieList:
        {list}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieList;

// Estudo sobre propTypes
// https://stackoverflow.com/questions/41771217/react-linter-airbnb-proptypes-array
