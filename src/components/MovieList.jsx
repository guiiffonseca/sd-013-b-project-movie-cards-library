// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    // console.log(this.props.movies[0].title);
    const contador = this.props.movies;

    return (
      <div className="caixa-filme">
        <h1>
          {' '}
          Movies Card
          {this.props.movies[0].title}
        </h1>

        {this.props.movies.map((obj, index) => (
          <MovieCard key={ index } name={ obj.title } subtitle={ obj.subtitle } story={ obj.storyline } image={ obj.imagePath } movie={ movies } />
        ))}

      </div>
    );
  }
}
