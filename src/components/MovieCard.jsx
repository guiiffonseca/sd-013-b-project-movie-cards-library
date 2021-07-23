// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline } = movie;
    return (
      <div>
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  // title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
};

export default MovieCard;
