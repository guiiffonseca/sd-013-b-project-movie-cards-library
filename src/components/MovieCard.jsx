import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <section>
        <h1>
          {title}
        </h1>
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
};

export default MovieCard;
