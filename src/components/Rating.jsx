import React from 'react';
import PropTypes from 'prop-types';

class Ratings extends React.Component {
  render() {
    const { rate } = this.props;
    return (
      <section className="movie-card-rating">
        Rating
        <div className="rating">
          { rate }
        </div>
      </section>
    );
  }
}

Ratings.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Ratings;
