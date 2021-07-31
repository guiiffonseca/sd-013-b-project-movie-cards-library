import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const movies = this.props;
    return (
      <div className="rating">{ movies.rating }</div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};
export default Rating;
