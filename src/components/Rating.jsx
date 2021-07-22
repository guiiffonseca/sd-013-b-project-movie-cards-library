import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{ rating }</div>
    );
  }
}

Rating.defaultProps = {
  rating: 5,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
