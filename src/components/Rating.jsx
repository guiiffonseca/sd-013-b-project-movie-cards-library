import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { ratingNumber } = this.props;
    return (
      <p>{ ratingNumber }</p>
    );
  }
}

Rating.propTypes = {
  ratingNumber: PropTypes.number.isRequired,
};

export default Rating;
