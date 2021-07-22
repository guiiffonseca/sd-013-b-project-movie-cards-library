import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';

class Rating extends React.Component {
  render() {
    return (
      <div className="rating">
        { movies.map(({ title, rating }) => (
          <Rating
            key={ title }
            rating={ rating }
          />
        ))}
      </div>
    );
  }
}

Rating.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
};

export default Rating;
