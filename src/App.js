import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
/* import MovieCard from './components/MovieCard';
import Rating from './components/Rating'; */

function App() {
  return (
    <div className="App">
      <header className="Header"><Header /></header>
      <section className="Movies"><MovieList /></section>
    </div>
  );
}

export default App;
