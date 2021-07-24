import React from 'react';     

class MovieCard extends React.Component {
  
  render() {
    const  { title, subtitle, storyline, imagePath}  = this.props;
    return (
      <section className= 'movie-card'>
        <img src= { imagePath } alt= { title } />
        <h3> { title } </h3>
        <h4> { subtitle } </h4>
        <p> { storyline } </p>
      </section> 

    )

  };
};

export default MovieCard;