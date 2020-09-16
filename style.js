// let a = +prompt('Введите число');
//     b = +prompt('введите число');



// alert(a + b);




// let a = +prompt('Vvedite chislo');
//     b = +prompt('Vvedite chislo');
//     c = +prompt('Vvedite chislo');

// let res = (a + b + c) / 3;

// alert(res.toFixed(2));

// let a = +prompt('Vvedite chislo');
//     b = +prompt('Vvedite chislo');
//     c = +prompt('Vvedite chislo'); 



// for (let i = 0; i < 3; i++) {
    // const a = +prompt('Vvedite chislo', '');
    //       b = +prompt('Vvedite chislo', '');
    //       c = +prompt('Vvedite chislo', '');

    // let res = (a + b + c) / 3;
    // alert(res);

// }

// let year = prompt('Название джава скрипт?', '');

// if ( year == 'ECMAScript') {
//     alert(Good);
// } else if (year !== 'ECMAScript' ) {
//     alert('No');
//     alert('ECMAScript');
// }

// let a = +prompt('Number', '');

// if (a > 0) {
//     alert(1);
// }else if (a < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }


// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }


//     let result = (a + b < 4) ? result = 'Мало' : result = 'Мало';

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.


// let age = 5;

// if (age !== 14 && age !== 90) {
//     console.log(5);
// }

// let admin = prompt('Whot you?', '');

// if (admin == 'Admin') {
//    a = prompt('Password', '');
// } 
// else if (a == '' || a == null) {
//     alert('Otmena');
// } else {
//     alert('I dont no');
// } if (a == 'I') {
//     alert('Hello');
// } else if (a == '' || a == null) {
//     alert('Otmena');
// } else {
//     alert('ne verno');
// }
//   let a;
// for ( let a = 2; a <= 10; a++) {
//     if (a % 2 == 0) continue;{
//     alert(a);
//     }        
// }
  
// let a;
// for ( let a = 2; a <= 10; a++) {
//     if (a % 2 == 0) {
//     alert(a);
//     }        
// }

   
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// let i = 0;
//   while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
//   }

// let a = +prompt('1 number', '');
//     b = +prompt('2 number', '');
//     c = +prompt('3 number', '');
// let res;

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//     res = 'no';
// } else if ((a > b) && (a > c)) {
//     res = a;
// } else if (b > c) {
//     res = b;
// } else {
//     res = c;
// }
// alert(res);


/*нахождение среднего числа*/

// let a = +prompt('Number 1', '');
//     b = +prompt('Number 2', '');
//     c = +prompt('Number 3', '');


// while (isNaN(a) || isNaN(b) || isNaN(c)) {
//     alert('Error');
//     a = +prompt('Number 1', '');
//     b = +prompt('Number 2', '');
//     c = +prompt('Number 3', ''); 
// }

// if (a < b && b < c) {
//     alert(b);
// } else if (a < c) {
//     alert(a);
// } else {
//     alert(c);
// }
    


/* проверяем number на то что делится ли оно без остатка на два других числа*/
// function isDivideBy (number, a, b) {
//     if (number % a == 0 && number % b == 0) {
//         return true;
//     } else {
//         return false
//     }
// }

// console.log(isDivideBy(12, 6, 5));

/*работа с массивом  */
// function arr (n) {
//     const array = [];
//     for (i = 0; i < n; i++) {
//         array.push(i + 1);
//     }
//     return array;
    
// }
// console.log(arr(5));


// function sum (a, b) {
//     return a * b;
// }

// console.log(sum(5, 2));


/* Выводит на экран информацию о пользователе, котороую сам ввел*/
// let name = prompt('Введиет имя', '');
// let firstname = prompt('Введиет Фамилию', '');
// let age = prompt('Введиет возраст', '');  

// function people (name, firstname, age) {
    
//     return alert('Ваше имя ' + name + ' Ваша фамилия ' + firstname + ' Ваш возраст ' + age);

// }
// people(name, firstname, age);




/* вычисление 2 в 10 степени*/
// let result = 1; 
// for (let counter = 0; counter < 10; counter++) { 
//     result = result * 2;
// }

// console.log(result);
/*функция принимает парамметр от 1 до 7 и выдает дни недели*/
// let days = +prompt('Введите число', '');

// function daysOfTheWeek (days) {

//     let arr = ['','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

//     delete arr[0];

//     alert(arr[days]);

/* Выыодит все не четные числа (простые)*/
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let b = a.length

// for (i = 0; i <= b; i++) {

//     if (i % 2 == 0) {
//         continue;
//     } else {
//         console.log(i);
//     }

// }
    
    

// }

// daysOfTheWeek(days);




/*Построение треугольника из хешей [i]  нужна для номера элемента массива допустим i = 2 то это '###'*/ 
// let b = ['#', '##', '###', '####', '#####', '######', '#######'];
// let len = b.length;

// for (let i = 0; i < len; i++) {
//     console.log(b[i]);
// }


/*callback*/ 
// function lern(lang, callback) {
//     console.log(`I ${lang}`);
//     callback();
// }
// function done() {
    
//     console.log('I good');
// }
// lern('JS', done);


/*Objekt*/

// const obj = {
//     name: 'test',
//     age: 25,
//     colors : {
//         border: 'black',
//         bg: 'red'
//     },
//     make: function() {
//         console.log('test');
//     }
// };

// obj.make();

/*удобная вещь узнать длину объекта */
// console.log(Object.keys(obj).length);

/*цикл для перебора объекта */
// for (let key in obj) {
//     if (typeof(obj[key]) === 'object'){
//         for (let i in obj[key]) {
//             console.log(`Svoistvo ${i} and znak ${obj[key][i]}`);
//         }
//     } else {
//             console.log(`Svoistvo ${key} and znak ${obj[key]}`);
//     }
// }  













// let numberFilms;

//  function start() {
//     numberFilms = +prompt('Сколько фильмов вы посиотрели?', '');

//     while (numberFilms == '' || numberFilms == null || isNaN(numberFilms)) {
//        numberFilms = +prompt('Сколько фильмов вы посиотрели?', ''); 
//     }
// }

// start();

// const personalMovies = {
//     count: numberFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '');
//               b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '') {
//             personalMovies.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detecP() {
    
//     if (personalMovies.count < 10) {
//         console.log('Просмотрено мало фильмов');
//     } else if (personalMovies.count >= 10 && rememberMyFilms.count < 30) {
//         console.log('Вы классический зритель');
//     } else {
//         console.log('Error');
//     }
// }

// detecP();

// function showMyDB(hidden) {
    
//     if (!hidden) {
//         console.log(personalMovies);
//     }
// }

// showMyDB(personalMovies.privat);

// function write() {
//     for (let i = 1; i <= 3 i++) {
//         const gener = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovies.genres[i - 1] = gener;
//     }
// }

// write();



