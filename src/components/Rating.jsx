import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <main className="rating">
        <h4>{ rating }</h4>
      </main>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

// DEFINE VALOR PADRÃO DA PROPS

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
