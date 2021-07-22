import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    // const { movies } = this.props;
    const { rating } = this.props;
    return (
      <div className="rating">
        { rating }
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
