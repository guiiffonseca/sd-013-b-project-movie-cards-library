import React from 'react';
import PropTypes from 'prop-types';

// Requisito 3

class MoveList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <main>
        {movie}
      </main>
    );
  }
}

// Verifica-se os dados recebidos são válidos
MoveList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoveList;
