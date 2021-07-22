import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { moviesInfo: { title } } = this.props;
    return (
      <h1>{ title }</h1>
    );
  }
}

export default MovieCard;

// title: 'Kingsglaive',
// subtitle: 'Final Fantasy XV',
// // // storyline: 'King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire\'s plans to steal the sacred crystal.',
// rating: 4.5,
// imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
// }
