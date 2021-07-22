// implement MovieCard component here
import React from 'react';

export default class MovieCard extends React.Component {
  render() {
    const { title, subtitle, story, image } = this.props;
    return (

      <section className="cardFilme">
        <img src={ image } alt="filme" />
        <h1>
          {' '}
          {title}
        </h1>
        <p>
          {' '}
          {subtitle}
          {' '}
        </p>
        <p>{story}</p>
      </section>

    );
  }
}
