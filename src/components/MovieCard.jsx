import React from 'react';
import PropTypes from 'prop-types';

class MovieCart extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <h1>{data.subtitle}</h1>
    );
  }
}

MovieCart.propTypes = {
  data: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default MovieCart;
