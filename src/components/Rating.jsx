// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { value } = this.props;
    console.log(`esse${value}`);
    return (
      <div className="rating">
        <p>{value}</p>
      </div>

    );
  }
}

Rating.propTypes = {

  value: PropTypes.string.isRequired,

};

export default Rating;
