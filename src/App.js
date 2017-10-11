import React, { Component } from 'react';
import './App.css';
import TMDB from "./TMDB"
import FilmDetails from "./filmDetails"
import FilmListings from "./filmListing"

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">Titles</h1>
          <FilmListings title={TMDB.films.map((item,i) => <li key={i}>item.title</li>)}/>
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails tmdb={TMDB}/>
        </div>
      </div>
    );
  }
}

export default App;
