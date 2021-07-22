// implement MovieCard component here
import React from 'react';
import movies from '../data';

export default class MovieCard extends React.Component {
  render() {
    return (

      <section className="cardFilme">
        <img src={ this.props.image } alt='filme'/>
        <h1>
          {' '}
          {this.props.title}
        </h1>
        <p>
          {' '}
          {this.props.subtitle}
          {' '}
        </p>
        <p>{this.props.story}</p>
      </section>

    );
  }
}
