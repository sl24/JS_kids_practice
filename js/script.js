"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i += 1) {
    const film = prompt("Один из последних просмотренных фильмов?", "");
    const rate = prompt("Насколько оцените его?");
    if (
      film != null &&
      rate != null &&
      film != "" &&
      rate != "" &&
      film.length < 50
    ) {
      personalMovieDB.movies[film] = rate;
      console.log("Done");
    } else {
      console.log("Error");
      i -= 1;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классный зритель!");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function writeYourGenres() {
  for (let i = 0; i < 3; i += 1) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
  }
}

writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);
