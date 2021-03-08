import { Component } from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/Movielist';
// import React,{Component} from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Movies</h1>
        <div className="container">
          <MovieList />
          <MovieDetails />
        </div>

      </div>
    ); 
  }
}

export default App;
