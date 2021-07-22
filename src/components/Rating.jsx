import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const p = this.props;
    const rate = p.rating;
    return <div className="rating">{rate}</div>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
