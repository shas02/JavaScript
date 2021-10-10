// // Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let firstNumber = 1;
// let secondNumber = 10;
// let age = -999;
// let truAge = 123;
// let pi = 3.14;
// let cakes = 2.7;
// let girlFriendAge = 16;
// let apples = true;
// let potatoes = false;
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello);
// alert(owu);
// document.write(owu + com + ua);
// console.log(firstNumber + secondNumber);
// console.log(age);
// document.write(truAge);
// alert(pi);
// console.log(cakes);
// console.log(girlFriendAge);
// console.log(apples);
// console.log(potatoes);
//
// // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// hello = 'Привіт';
// owu = 'школа';
// com = 'ком';
// ua = 'юа';
// firstNumber = 0;
// secondNumber = 1;
// age = 333;
// truAge = 150;
// pi = 'Пі';
// cakes = 3;
// girlFriendAge = 22;
// apples = false;
// potatoes = true;
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello);
// alert(owu);
// document.write(owu + com + ua);
// console.log(firstNumber + secondNumber);
// console.log(age);
// document.write(truAge);
// alert(pi);
// console.log(cakes);
// console.log(girlFriendAge);
// console.log(apples);
// console.log(potatoes);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let name = prompt('Write your name please.');
// let fathersName = prompt("Write your father's.");
// let age = prompt("write your age.");
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// alert("Вітаю " + name + " " + fathersName + ". Тобі " + age + " років.")
// // - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// let nameFathersNameAge = name + fathersName + age;
// console.log(nameFathersNameAge);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let number1 = prompt("write a number");
// let truenumber1 = parseFloat(number1)
// console.log(typeof number1);
// console.log(typeof truenumber1);
//
// let number2 = prompt("write a number");
// let truenumber2 = parseFloat(number2)
// console.log(typeof number2);
// console.log(typeof truenumber2);
//
// let number3 = prompt("write a number");
// let truenumber3 = parseFloat(number3)
// console.log(typeof number3);
// console.log(typeof truenumber3);
//
// document.write(truenumber1 + " " + truenumber2 + " " + truenumber3)

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// let number1 = prompt("write a number 1");
// let truenumber1 = parseInt(number1, 10);
// console.log(number1 + " " + typeof number1);
// console.log(truenumber1 + " " + typeof truenumber1);
//
// let number2 = prompt("write a number 2");
// let truenumber2 = parseInt(number2, 10);
// console.log(number2 + " " + typeof number2);
// console.log(truenumber2 + " " + typeof truenumber2);
//
// let number3 = prompt("write a number 3");
// let truenumber3 = parseInt(number3, 10);
// console.log(number3 + " " + typeof number3);
// console.log(truenumber3 + " " + typeof truenumber3);
//
// let number4 = prompt("write a number 4  ");
// let truenumber4 = parseInt(number4, 10);
// console.log(number4 + " " + typeof number4);
// console.log(truenumber4 + " " + typeof truenumber4);
//
// console.log(truenumber1 + truenumber2 + truenumber3 + truenumber4);

// // - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// let number1 = prompt("write a number 1");
// let truenumber1 = parseFloat(number1);
// console.log(number1 + " " + typeof number1);
// console.log(truenumber1 + " " + typeof truenumber1);
//
// let number2 = prompt("write a number 2");
// let truenumber2 = parseFloat(number2);
// console.log(number2 + " " + typeof number2);
// console.log(truenumber2 + " " + typeof truenumber2);
//
// let number3 = prompt("write a number 3");
// let truenumber3 = parseFloat(number3);
// console.log(number3 + " " + typeof number3);
// console.log(truenumber3 + " " + typeof truenumber3);
//
// //     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let result = truenumber1 + truenumber2 + truenumber3;
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let number1 = prompt("write a number 1");
// let truenumber1 = Math.round(parseFloat(number1));
// console.log(number1 + " " + typeof number1);
// console.log(truenumber1 + " " + typeof truenumber1);
//
// let number2 = prompt("write a number 2");
// let truenumber2 = Math.round(parseFloat(number2));
// console.log(number2 + " " + typeof number2);
// console.log(truenumber2 + " " + typeof truenumber2);
//
// let number3 = prompt("write a number 3");
// let truenumber3 = Math.round(parseFloat(number3));
// console.log(number3 + " " + typeof number3);
// console.log(truenumber3 + " " + typeof truenumber3);
//
// let result = truenumber1 + truenumber2 + truenumber3;
// console.log(result);
// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25

// let number1 = prompt("write a number 1");
// let truenumber1 = Math.round(parseFloat(number1));
// console.log(number1 + " " + typeof number1);
// console.log(truenumber1 + " " + typeof truenumber1);
//
// let number2 = prompt("write a number 2");
// let truenumber2 = Math.round(parseFloat(number2));
// console.log(number2 + " " + typeof number2);
// console.log(truenumber2 + " " + typeof truenumber2);
//
// let result = Math.pow(truenumber1, truenumber2);
// console.log(result);

//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 < 6 -> true
// 5 >= 6 -> false
// 5 > 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 != 10 -> false
// 10 !== 10 -> false
// 10 < 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true
//
// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// // console.log(132 > 100 && 45 < 12 );
// false
// // console.log(34 > 33 && 23 < 90 );
// true
// // console.log(99 > 100 && 45 > 12 );
// false
// // console.log(132 > 100 || 45 < 12 );
// true
// console.log(111 > 11 || 45 < 111 );
// true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
//true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// true
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
// false
//
//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str, typeof num, typeof flag, typeof txt);
// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
// let a1 = (16 / 2) * 11;
// let a2 = 5*2;
// let a3 = 5+3;
// let a4 = 5/2;
// let a5 = 99*(1+4)-3;
//
// console.log(a1, a2, a3, a4, a5);
// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a7 = 5 % 3;
// let a8 = 3 % 5;
// let a6 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
//
// console.log(a6, a7, a8, a9, a10);

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
// let height = 23;
// let width = 10;
//
// let s = height*width;
//
// console.log(s);
//
// 5.  Напиши код, который знаходить объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heightC = 10;
// let dC = 4;
//
// let v = heightC * dC;
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3;
// let m = 4;
//
// let k = Math.sqrt(n ** 2 + m ** 2);
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = "Hello world";
//
// document.write(str);
// alert(str);
// console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let name = prompt('ПІП');
// let age = prompt('Вік');
// let hobby = prompt('Хоббі');
//
// alert(`${name}\n${age}\n${hobby}`);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?';
//
// let concatenation = `${str1} ${str2} ${str3}`
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
// 205
//
// 15
//
// 40
//
// 10
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14"));
// console.log(parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(parseInt("Вася"));
//
// 3
// -7
// 435
// NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let number1 = prompt('write number 1');
// let number2 = prompt('wte number 2');
// alert(number1 * number2);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name = prompt('write your name');
// let surname = prompt('write your surname');
// let age = prompt('write your age');
//
// alert(`Доброго вечора ${name} ${surname}, вітаю вас, вам ${age}`);

//
//
// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let number1 = prompt('write number 1');
// let number2 = prompt('write number 2');
// let number3 = prompt('write number 3');
// let a = parseFloat(number1);
// let b = parseFloat(number2);
// let c = parseFloat(number3);
// if (a<=b && b<=c) {
//     console.log(a, b, c);
// } else if (a<=c && c<=b) {
//     console.log(a, c, b);
// } else if (b<=a && a<=c) {
//     console.log(b, a, c);
// } else if (b<=c && c<=a) {
//     console.log(b, c, a);
// } else if (c<=a && a<=b) {
//     console.log(c, a, b);
// } else if (c<=b && b<=a) {
//     console.log(c, b, a);
// }
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt('Цвет светофора:');
// switch (color) {
//     case 'Зелений':
//         alert("Йди");
//         break;
//
//     case 'Жовтий':
//         alert("жди");
//         break;
//
//     case 'Червоний':
//         alert("стій");
//         break;
//
//     default:
//         alert('роби що хочеш')
// }

//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let color = prompt('Цвет светофора:');
let isRoadClear = confirm('Дорога чиста?');

if (color === 'зелений' && isRoadClear === true) {
    alert("Йди");
}
if (color === 'зелений' && isRoadClear === false) {
    alert("почекай доки порушники поїдуть");
}
if (color === 'жовтий' && isRoadClear === false) {
    alert("чекай");
}
if (color === 'жовтий' && isRoadClear === true) {
    alert("чекай");
}
if (color === 'червоний' && isRoadClear === true) {
    alert("Стій і чекай");
}
if (color === 'червоний' && isRoadClear === false) {
    alert("Стій і чекай");
} else {
    alert("роби що хочеш");
}
