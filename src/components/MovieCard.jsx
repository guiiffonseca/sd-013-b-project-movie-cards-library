import React from 'react';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    return (
      <div> {
      this.props.title  
        }
      </div>
    )
  }
}

export default MovieCard;