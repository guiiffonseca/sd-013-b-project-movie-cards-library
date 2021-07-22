import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
    render() {
        const { movies } = this.props;
        return (
            movies.map(({title, subtitle, storyline, rating, imagePath }, index) => (
                <MovieCard 
                key={index}
                title={title}
                subtitle={subtitle}
                storyline={storyline}
                rating={rating}
                imagePath={imagePath}
                />
            ))
            
        );
    }
}

export default MovieList;
