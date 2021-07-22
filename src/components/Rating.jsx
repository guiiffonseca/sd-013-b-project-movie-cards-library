import React from 'react';
import PropType from 'prop-types';

function Rating(props) {
  const { rating } = props;
  return <p className="rating">{rating}</p>;
}

Rating.propTypes = {
  rating: PropType.number.isRequired,
};

export default Rating;
