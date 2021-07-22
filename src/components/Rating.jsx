import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};
