import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.movie}
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
//   movie: PropTypes.arrayOf(
//     PropTypes.shape(
//       {
//         title: PropTypes.string,
//         subtitle: PropTypes.string,
//         storyline: PropTypes.string,
//         rating: PropTypes.number,
//         imagePath: PropTypes.string,
//       },
//     ),
//   ).isRequired,
};

export default MovieCard;
