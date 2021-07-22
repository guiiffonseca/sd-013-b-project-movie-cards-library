import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        <dir>
          { this.props.movies}
        </dir>
      </section>
    );
  }
}
export default MovieList;
