// implement Rating component here
import React, { Component } from 'react';
import PropType from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p>{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropType.number.isRequired,
};

export default Rating;
