// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { ratingNumber } = this.props;
    return (
      <div>
        <p>{ratingNumber}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  ratingNumber: PropTypes.number,
};

Rating.defaultProps = {
  ratingNumber: 3,
};

export default Rating;
