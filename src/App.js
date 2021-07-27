import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

// Special Thanks: Thiago Souza - Turma 13 - Tribo B

function App() {
  return (
    <div>
      <div>
        <Header />
        <MovieList movies={ movies } />
      </div>
    </div>
  );
}

export default App;
