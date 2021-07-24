import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';
import movie from './data.js';

function App() {
  return (
    <div className="App">
      {<Header/>}
      {<MovieList movie = {movie}/>}
      
    </div>
  );
}

export default App;
