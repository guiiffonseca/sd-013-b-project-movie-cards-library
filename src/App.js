import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="MovieList">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
