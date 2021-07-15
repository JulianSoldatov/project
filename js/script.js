"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "2"); ;

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

}; 

const lastWatchedFilm = prompt("Один из последних просмотренных фильмов?", "Бетмен"),
      ratingFilm = prompt("Рейтинг фильма", "5");


personalMovieDB.movies[lastWatchedFilm] = ratingFilm;


console.log(personalMovieDB);



