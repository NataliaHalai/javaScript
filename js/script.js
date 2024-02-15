"use strict";

//First task
// let name = "Іван";
// let admin = "Іван";
// alert(admin);


//second

// let cityName = "Київ";
// let currentUsername;
// currentUsername = "Ольга";
// console.log(cityName);

// let firstNum = 5;
// console.log(typeof (5));

// console.log(typeof ("hgfjghj"));
// console.log(typeof (true));
// console.log(typeof (5474365783465784768578678567878));
// console.log(typeof (fjrhg6676788787));
// console.log(typeof (0));

//object

// let storeName = "hm";

// const storeDescription = {
//     budget: 10000,
//     employees: ["Pernilla", "Elsa", "Stella"],
//     productsPrise: {
//         pants: 200,
//         hat: 300
//     },
//     open: true
    
// };
// console.log(storeDescription.productsPrise.pants);
// console.log(storeDescription.employees[0]);

// let user = {};
// user.name = "Oleg";
// user.age = 50;
// user.city = "Kyiv";

// for (key in user) {
//     console.log(key);
//     console.log(user[key]);
// };


// const user = {};
// user.name = "Natalia";
// user.age = 33;
// user.isMarried = true;
// user.favColors = ["red", "blue", "white"];
// user.data = {
//     city: "Kyiv",
//     likeAnimals: true
// };
// console.log(user);

// let name;
// let data = [1, "black", true, null, name];
// console.log(data);


// task1

//  let numberOfFilms = prompt("Скільки фільмів ви подивились останнім часом?");
//  const personalMovieDB = {
//      count: numberOfFilms,
//      movies: {},
//      actors: {},
//      genres: [],
//      privat: false,

//  };

// while (numberOfFilms) {
//     numberOfFilms--;
//     let a = prompt("Назва фільму");
//     let b = prompt("На скільки оціните його?");
//     alert(`Я оцінюю фільм ${a} на ${b} балів`);
//     console.log(`Оцінка фільму ${a} - ${b} балів`);
// };



//  let a = prompt("Назва фільму");
//  let b = prompt("На скільки оціните його?");
//  let c = prompt("Назва фільму");
//  let d = prompt("На скільки оціните його?");

//  personalMovieDB.movies[a] = b;
//  personalMovieDB.movies[c] = d;

//  console.log(personalMovieDB);


// let numberOfFilms = +prompt("Скільки фільмів ви подивились останнім часом?");

// while (numberOfFilms) {
//     numberOfFilms--;
//     let a = prompt("Назва фільму");
//     let b = prompt("На скільки оціните його?");
//     alert(`Я оцінюю фільм ${a} на ${b} балів`);
//     console.log(`Оцінка фільму ${a} - ${b} балів`);
// };


// let a = 5;
// let b = 6;
// (a > 4 || b > 7) ? console.log(true) : console.log(false);
// (a < 5 || b < 5) ? console.log(true) : console.log(false);


// let num = +prompt("Введіть парне число");

// if (num % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// };

//Task 2
// let a = null;
// let b = 5;

// if (a > b) {
//     console.log(a);
// } else if (a === b) {
//     console.log(a, b);
// } else  if (b > a) {
//     console.log(b);
// } else {
//     console.log("Error");
// };



//Task 3

// let age = +prompt("Введіть ваш вік");

// if (age >= 18) {
//     console.log("Welcome");
//     alert("Welcome");
// } else {
//     console.log(false);
       
// };


//task 4

let validLogin = "user123";
let validPassword = "qwerty";

let login = prompt("Введіть логін");
let password = prompt("Введіть пароль");

if (login === validLogin && password === validPassword) {
    console.log(true);
    alert("Вітаю");
    
} else {
    console.log(false);
    alert("Ви ввели неправильний логін або пароль");
};




