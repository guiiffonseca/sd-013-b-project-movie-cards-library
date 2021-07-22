// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (<h4 className="rating">{rating}</h4>);
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
