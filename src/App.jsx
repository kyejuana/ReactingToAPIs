import React, { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import FilmCard from "./components/FilmCard";
import PeopleCard from "./components/PeopleCard";

const App = () => {
  const [showFilms, setShowFilms] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (showFilms === true) {
      fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((Films) => setFilms(Films));
    } else if (showPeople === true) {
      fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((People) => setPeople(People));
    }
  }, [showFilms, showPeople]);

  return (
    <>
      <button
        onClick={() => {
          setShowFilms(true);
          setShowPeople(false);
        }}
      >
        Load Films
      </button>
      <button
        onClick={() => {
          setShowFilms(false);
          setShowPeople(true);
        }}
      >
        Load People
      </button>
      {showFilms && films.map((film) => <FilmCard film={film} />)}
      {showPeople && people.map((person) => <PeopleCard person={person} />)}
    </>
  );
};

export default App;
