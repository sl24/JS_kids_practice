"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// плюс перед prompt чтобы понять что в ответе будет цифра;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классный зритель!");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
