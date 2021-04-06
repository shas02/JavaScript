// 1) створити функцію яка приймає масив та виводить його
function arrWrite(arr) {
    console.log(arr);
}

arrWrite([5, 6, 7, 8, 222]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function rundom() {
    let a = [];
    for (i = 0; i < 20; i++) {
        a.push(Math.floor(Math.random() * 11));
    }
    console.log(arrWrite(a));
}

rundom();

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(arr = []) {
    let number = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < number) {
            number = arr[i];
        }
    }
    console.log(number);
}

min([3, 1, 4, 5, 8, 222]);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max() {
    let number = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        if (arguments[i] > number) {
            number = arguments[i];
        }
    }
    console.log(number);
}

max(1, 33, 2, 677, 999, 23)

// 5) створити функцію яка повертає найбільше число з масиву
function max() {
    let number = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        if (arguments[i] > number) {
            number = arguments[i];
        }
    }
    return number;
}

let a = max(1, 33, 2, 677, 999, 23);
console.log(a);

// 6) створити функцію яка повертає найменьше число з масиву
let min = function () {
    let number = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        if (arguments[i] < number) {
            number = arguments[i];
        }
    }
    return number;
}
let a = min(5, 4, 333, 99, 0, 276);
console.log(a);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function sumator() {
    let sum = 0;
    for (let argument of arguments) {
        sum += argument;
    }
    return sum;
}

let a = sumator(22, 33, 44, 55, 66, 77, 88, 99, 100);
console.log(a);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function mSumator() {
    let sum = 0;
    for (const arrayElement of arguments) {
        sum += arrayElement;
    }
    let mSum = sum / arguments.length;
    return mSum;
}

let a = mSumator(333, 111, 777, 999, 555);
console.log(a);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let keys = (arrObject = []) => {
    let a = [];
    for (const arrObjectElement of arrObject) {
        a.push(Object.keys(arrObjectElement));
    }
    console.log(a);
    let b = [];
    for (let i = 0; i < a.length - 1; i++) {
        b = a[i].concat(a[i + 1]);
    }
    return b;
}
let a = keys([{name: 'Vasya', age: 21}, {model: 'BMW'}]);
console.log(a);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let values = (arr = []) => {
    let a = [];
    for (const aElement of arr) {
        a.push(Object.values(aElement));
    }
    console.log(a);
    let b = [];
    for (let i = 0; i < a.length - 1; i++) {
        b = a[i].concat(a[i + 1]);
    }
    return b;
}
let a = values([{name: 'Vasya', age: 21}, {model: 'BMW'}]);

console.log(a);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
const array = (arr1, arr2) => {
    let a = [];
    for (let i = 0; i < arr1.length; i++) {
        a.push(arr1[i] + arr2[i]);
    }
    return a;
}
const sumArray = array([1, 2, 3, 4], [2, 3, 4, 5]);
console.log(sumArray);

// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax() {
let min = arguments[0];
let max = arguments[0];
for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < min) {
        min = arguments [i];
    } else if (arguments[i] > max) {
        max = arguments[i];
    }
}
console.log(max);
return min;
}

let a = minMax(1, 3, 5, 6, 33, 297, 88);
console.log(a);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
let keysValues = (arr = [], i = 'keys') => {
    let a = [];
    for (const aElement of arr) {
        if (i === 'keys') {
            a.push(Object.keys(aElement));
        } else if (i === 'values') {
            a.push(Object.values(aElement));
        }
    }
    console.log(a);
    let b = [];
    for (let i = 0; i < a.length - 1; i++) {
        b = a[i].concat(a[i + 1]);
    }
    return b;
}
let a = keysValues([{name: 'Vasya', age: 21}, {model: 'BMW'}], 'values');

console.log(a);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
function changer(arr = [], item = 0) {
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        if (i === item) {
            let a = arr[i];
            let b = arr[i + 1];
            arr[i] = b;
            arr[i + 1] = a;
        }

    }
    return arr;
}

let newArr = changer([9, 8, 0, 4], 0);
console.log(newArr);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function porter(arr = []) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.push(arr.splice(i, 1));
        }

    }
    return arr;
}

let a = porter([1, 0, 6, 0, 3]);
console.log(a);

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// ***************************************************************************

function normalizator(name = 'Harry Potter') {
    console.log(name);
    // let a = name.trim().replace(/\s+/g, ' '); - такий варіант знайшов в інтернеті
    let a = name.replaceAll(' ', '');
    console.log(a);
    for (let i = 1; i < a.length; i++) {
        if (a[i] === a[i].toUpperCase()) {
            console.log(a[i]);
            a.splice(i, 0, ' '); /*- намагався зробити так, але чомусь не працює*/
            a[i] = ` ${a[i]}`; /*- а ще так, але теж чомусь не спрацювало*/
        }
    }
    return a;
}

let a = normalizator('    Hermione       Granger      ')
console.log(a);
// ******************************************************************************
// =====ц=======================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function sayHi() {
    let div = document.createElement('div')
    div.innerText = 'Hello owu'
    document.body.appendChild(div);
}

sayHi();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function saySomething(type = 'h1', text = 'Hi') {
    let element = document.createElement(type);
    element.innerText = text;
    document.body.appendChild(element);
}

saySomething('div', 'Hello');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let auto = ['mazda', 'honda', 'BMW', 'Mersedes'];

function addAuto(arrAuto = [], id = 'auto') {
    let element = document.getElementById(id);

    element.innerText = arrAuto;
}

addAuto(['mazda', 'honda', 'BMW', 'Mersedes'], 'auto');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let autos = [
    {
        name: 'Mazda',
        age: 1,
        status: true,
    }, {
        name: 'Honda',
        age: 2,
        status: true,
    }, {
        name: 'BMW',
        age: 7,
        status: true,
    }, {
        name: 'Mersedes',
        age: 5,
        status: true,
    }, {
        name: 'Tesla',
        age: 1,
        status: true,
    }
];

let addAuto = (arrOfAuto = [], id = 'auto') => {
    let element = document.getElementById(id);
    let a = [];
    for (let i = 0; i < arrOfAuto.length; i++) {
        const autoDiv = document.createElement('div');
        autoDiv.style.border = '5px solid yellow';
        autoDiv.style.margin = '10px';

        a.push(Object.entries(arrOfAuto[i]));

        autoDiv.innerHTML = `${Object.entries(arrOfAuto[i])}`;
        element.appendChild(autoDiv);
    }
    console.log(a);
}

addAuto(autos, 'auto');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
function addAuto(arrAuto = [], id = 'auto') {
    let element = document.getElementById(id);
    for (i = 0; i < arrAuto.length; i++) {
        let a = document.createElement('div')
        a.style.margin = '10px'
        a.innerHTML = `Name: ${arrAuto[i].name}</br>
          Age: ${arrAuto[i].age}</br>
          Status: ${arrAuto[i].status}`

        element.appendChild(a);
    }
}

addAuto(autos, 'auto');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
let autoAdder = (arrAuto = [], id = 'auto') => {
    let autoDiv = document.getElementById(id);
    for (let i = 0; i < arrAuto.length; i++) {
        let box = document.createElement('div');
        box.style.margin = '10px';

        box.innerHTML = `Name: ${arrAuto[i].name}</br>
          Age: ${arrAuto[i].age}</br>
          Status: ${arrAuto[i].status}`

        autoDiv.appendChild(box);

    }
}

autoAdder(autos, 'auto');

// Для кожної властивості створити всередені блока автомоблія свій блок
let autoAdder = (arrAuto = [], id = 'auto') => {
    let autoDiv = document.getElementById(id);
    for (let i = 0; i < arrAuto.length; i++) {
        let box = document.createElement('div');
        box.style.margin = '10px';

        box.innerHTML = `<div>Name: ${arrAuto[i].name}</div>
          <div>Age: ${arrAuto[i].age}</div>
          <div>Status: ${arrAuto[i].status}</div>`

        autoDiv.appendChild(box);

    }
}

autoAdder(autos, 'auto');
// // ******************* НАЗАД В МИНУЛЕ *********************** //