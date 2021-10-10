// --створити масив з:
//     - з 5 числових значень
// let numbers = [1, 2, 3, 4, 5];
//
// // - з 5 стічкових значень
// let strings = ['sdasd', 'qwwqrq', 'truyu', '658778', 'mnbcxv'];
//
// // - з 5 значень стрічкового, числового та булевого типу
// let arr = ['sdasd', 'qwwqrq', 'truyu', '658778', 'mnbcxv', 1, 2, 3, 4, 5, true, true, true, false, false];
//
// // - та вивести його в консоль
// console.log(numbers);
// console.log(strings);
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// // console.log(arr);
//
// arr[0] = 1;
// arr[1] = 'string';
// arr[2] = true;
// arr[3] = -55;
//
//
// console.log(arr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write("<div>Долой старое, да здравствует новое!</div>");
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 1; i < 11; i++) {
//     document.write(`<div>Привіт я маю номер ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
//
// while (i < 20) {
//     i++;
//     document.write("<div>Долой старое, да здравствует новое!</div>");
// }
// console.log(i);
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
//
// while (i < 20) {
//     i++;
//     document.write(`<div>Привіт я маю номер ${i}</div>`);
// }
// console.log(i);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbersArr.length; i++) {
//     console.log(numbersArr[i]);
//
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringsArr = ['la camiseta', 'el abrelatas', 'el autobus', 'el alga', 'la ardillita', 'básquetbol', 'el ascensor', 'la ardillita', 'las papas', 'la oveja', 'el grillo'];
// for (const string of stringsArr) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let someArr = [1, 2, 3, 'la camiseta', 'el abrelatas', 'el autobus', true, false, true, false];
// let i = 0;
//
// while (i < someArr.length - 1) {
//     i++
//     console.log(someArr[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let someArr = [1, 2, 3, 'la camiseta', 'el abrelatas', 'el autobus', true, false, true, false];
// for (let i = 0; i < someArr.length; i++) {
//     if (typeof someArr[i] === "boolean") {
//         console.log(someArr[i])
//     }
//
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let someArr = [1, 2, 3, 'la camiseta', 'el abrelatas', 'el autobus', true, false, true, false];
// for (let i = 0; i < someArr.length; i++) {
//     if (typeof someArr[i] === "number") {
//         console.log(someArr[i])
//     }
//
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let someArr = [1, 2, 3, 'la camiseta', 'el abrelatas', 'el autobus', true, false, true, false];
// for (let i = 0; i < someArr.length; i++) {
//     if (typeof someArr[i] === "string") {
//         console.log(someArr[i])
//     }
//
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let someArr = [1, 2, 3, 'la camiseta', 'el abrelatas', 'el autobus', true, false, true, false];
//
// let newArr = [];
//
// for (let i = 0; i < someArr.length; i++) {
//     newArr[i] = someArr[i];
// }
// console.log(newArr);
//
// for (i = 0; i < newArr.length; i++) {
//     console.log(newArr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 11; i += 1) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 101; i += 1) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 101; i += 2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 101; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`)
//     }
// }

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array = ['a', 'b', 'c'];
// for (let i = 1; i < 4; i++) {
//     array.push(i);
// }
// console.log(array);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array = [1, 2, 3];
// console.log(array);
// array.splice(0, 3, 3, 2, 1);
// console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array = [1, 2, 3];
// console.log(array);
// array.push(4, 5, 6);
// console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array = [1, 2, 3];
// console.log(array);
// array.unshift(4, 5, 6);
// console.log(array);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let array = ['js', 'css', 'jq'];
// console.log(array);
// console.log(array.shift());
// console.log(array);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let array = ['js', 'css', 'jq'];
// console.log(array);
// console.log(array.pop());
// console.log(array);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(0,3);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(2,3);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(1, 0, 'a', 'b');
// console.log(arr);
// arr.splice(6, 0, 'c');
// console.log(arr);
// arr.push('e');
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arrNumbers = [11, 23, 44, 86, 97, 150, 19099, 52, 60, 10];
// for (const arrNumber of arrNumbers) {
//     if (arrNumber % 2 === 0) {
//         console.log(arrNumber);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arrNumbers = [11, 23, 44, 86, 97, 150, 19099, 52, 60, 10];
// console.log(arrNumbers);
//
// let newArr = [];
// console.log(newArr);
//
// for (const arrNumber of arrNumbers) {
//     newArr.push(arrNumber);
// }
//
// console.log(arrNumbers);
// console.log(newArr);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arrNumbers = [11, 23, 44, 86, 97, 150, 19099, 52, 60, 10];
// console.log(arrNumbers);
//
// let newArr = [];
// console.log(newArr);
//
// for (let i = 0; i < arrNumbers.length; i++) {
//     newArr[i] = arrNumbers[i];
// }
//
// console.log(arrNumbers);
// console.log(newArr);


// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let arrNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
// let i = 0;
// while (i < arrNumbers.length) {

//     console.log(arrNumbers[i]);
//     i++;
// }

//     2. перебрати його циклом for
// for (let i = 0; i < arrNumbers.length; i++) {
//     console.log(arrNumbers[i]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arrNumbers.length) {
//     if (i % 2 !== 0) {
//         console.log(arrNumbers[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arrNumbers.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(arrNumbers[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arrNumbers.length) {
//     if (arrNumbers[i] % 2 === 0) {
//         console.log(arrNumbers[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arrNumbers.length; i++) {
//     if (arrNumbers[i] % 2 === 0) {
//         console.log(arrNumbers[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arrNumbers.length; i++) {
//     if (arrNumbers[i] % 3 === 0) {
//         arrNumbers[i] = "okten";
//     }
// }
// console.log(arrNumbers);

// 8. вивести масив в зворотньому порядку.
// for (let i = arrNumbers.length; i >= 0; i--) {
//
//     console.log(arrNumbers[i]);
//
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
// створити пустий масив та :
// let arr = [];
//     - заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);
// - заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);

// 1. Створити пустий масив та :
// let arr = [];
// //     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 16) + 5);
// }
// console.log(arr);
// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
// }
// console.log(arr);
// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 2; i < arr.length; i += 3) {
//     console.log(arr[i]);
//
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100, 250, 50, 168, 120, 345, 188];
// console.log(arr);
//
// let middleCheck = null;
// console.log(middleCheck);
//
// for (let i = 0; i < arr.length; i++) {
//     middleCheck = middleCheck + arr[i];
// }
// console.log(middleCheck);
//
// middleCheck = middleCheck / arr.length;
// console.log(middleCheck);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [];
// console.log(array);
// let newArr = [];
// console.log(newArr)
//
// for (let i = 0; i < 20; i++) {
//     array.push(Math.floor(Math.random() * 16) + 5);
// }
// console.log(array);
//
// for (let i = 0; i < array.length; i++) {
//     array[i] = array[i]*5;
//     newArr.push(array[i]);
// }
//
// console.log(array)
// console.log(newArr);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = ['sdasd', 'qwwqrq', 'truyu', '658778', 'mnbcxv', 1, 2, 3, 4, 5, true, true, true, false, false];
// console.log(arr);
//
// let newArr = [];
// console.log(newArr);
//
// for (const arrElement of arr) {
//     if (typeof arrElement === "number") {
//         newArr.push(arrElement);
//     }
// }
//
// console.log(arr);
// console.log(newArr);

//     ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// console.log(arr);
//
// let word = null;
// console.log(word);
//
// for (let i = 0; i < arr.length; i++) {
//
//     if (word === null) {
//         word = arr[i];
//     } else {
//         word = word + arr[i];
//     }
// }
//
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// console.log(arr);
//
// let word = null;
// console.log(word);
//
// let i = 0;
//
// while (i < arr.length) {
//     if (word === null) {
//         word = arr[i];
//     } else {
//         word = word + arr[i];
//     }
//     i++
// }
//
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arr = ['a', 'b', 'c'];
console.log(arr);

let word = null;
console.log(word);

for (let point of arr) {

    if (word === null) {
        word = point;
    } else {
        word = word + point;
    }
}

console.log(word);