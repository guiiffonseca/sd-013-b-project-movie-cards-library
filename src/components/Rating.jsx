import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    let { rating } = this.props;
    if (!rating) {
      rating = 0;
    }
    return (
      <div className="rating">{ rating }</div>
    );
  }
}

// Rating.defaultProps = {
//   rating: 0,
// };

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
