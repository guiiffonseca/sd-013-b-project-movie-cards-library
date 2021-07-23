import React from 'react';
import PropTyper from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">
        { rating }
      </p>
    );
  }
}

Rating.propTypes = {
  rating: PropTyper.number.isRequired };

export default Rating;
