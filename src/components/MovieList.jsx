import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// Requisito 3

class MoveList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((data) => <MovieCard key={ data.title } movie={ data } />)}
      </main>
    );
  }
}

// Verifica-se os dados recebidos são válidos
/*MoveList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};*/

export default MoveList;
