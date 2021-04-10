"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""); // плюс перед prompt чтобы понять что в ответе будет цифра;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const firstFilm = prompt("Один из последних просмотренных фильмов?", "");
const rate1 = prompt("Насколько оцените его?");

const secondFilm = prompt("Один из последних просмотренных фильмов?", "");
const rate2 = prompt("Насколько оцените его?");

personalMovieDB.movies[firstFilm] = rate1;
personalMovieDB.movies[secondFilm] = rate2;

console.log(personalMovieDB);
