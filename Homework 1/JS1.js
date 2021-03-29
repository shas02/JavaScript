// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let say = 'hello';
let name = 'owu';
let end = 'com';
let finish = 'ua';
let Sam = 1;
let fingers = 10;
let mozgi = -999;
let lvl = 123;
let pi = 3.14;
let number = 2.7;
let age = 16;
let is = true;
let not = false;

// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
alert(say);
console.log(name);
document.write(end);
console.log (finish);
alert(Sam);
document.write (fingers);
console.log(mozgi);
alert(lvl);
document.write(pi);
console.log(number);
alert(age);
document.write(is);
console.log(not);

// // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
say = 'Bye';
name = 'sasha';
end = 'hi';
finish = 'blabla';
Sam = 3;
fingers = 15;
mozgi = -1000;
lvl = 80;
pi = 3.1415;
number = true;
age = 17;
is = 'am';
not = 'fall';

// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
alert(say);
console.log(name);
document.write(end);
console.log (finish);
alert(Sam);
document.write (fingers);
console.log(mozgi);
alert(lvl);
document.write(pi);
console.log(number);
alert(age);
document.write(is);
console.log(not);

// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
const userName = prompt('Як тебе звати?');
console.log(userName);

const userMiddleName = prompt("Яке твоє ім'я по батькові?");
console.log(userMiddleName);

const userAge = prompt('Скільки тобі років?');
console.log(userAge);
//
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
alert('Вітаю '+ userName + ' ' + userMiddleName + '. Тобі ' + userAge + ' років.');
//
// // - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
let container = userName + userMiddleName + userAge;
document.write(container);

// // - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
let age = prompt('write your age');
let number1 = parseFloat(age);
console.log(number1);

let fingers = prompt('write number of fingers on your hand');
let number2 = parseFloat(fingers);
console.log(number2);

let eyes = prompt('write number of eyes that you have');
let number3 = parseFloat(eyes);
console.log(number3);

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
let date = prompt("write today's date");
console.log(date);
let month = prompt("write today's month");
console.log(month);
let year = prompt("write the current year");
console.log(year);
let wheels = prompt("write down the number of wheels in the car");
console.log(wheels);
let number = parseInt(date, 10) + parseInt(month, 10) + parseInt(year, 10) + parseInt(wheels, 10);
console.log(number);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
let age = prompt('write your age');
let number1 = parseFloat(age);
console.log(number1);

let fingers = prompt('write number Pi');
let number2 = parseFloat(fingers);
console.log(number2);

let eyes = prompt('write some number');
let number3 = parseFloat(eyes);
console.log(number3);

let result = number1 + number2 + number3;
console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
let age = prompt('write your age');
let number1 = parseFloat(age);
console.log(number1);

let fingers = prompt('write number Pi');
let number2 = parseFloat(fingers);
console.log(number2);

let eyes = prompt('write some number');
let number3 = parseFloat(eyes);
console.log(number3);

let result = Math.round(number1) + Math.round(number2) + Math.round(number3);
console.log(result);

// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25
let number = +prompt('write some number');
console.log(number);
let degree = +prompt('write the degree of number');
console.log(degree);

console.log(Math.pow(number, degree));

//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
console.log(5<6);
// // 5 ? 6 -> false
console.log(5>6);
// // 5 ? 6 -> false
console.log(5>=6);
// // 5 ? 6 -> false
console.log(5==6);
// // 10 ? 10 -> true
console.log(10===10);
// // 10 ? 10 -> true
console.log(10==10);
// // 10 ? 10 -> false
console.log(10>10);
// // 10 ? 10 -> false
console.log(10!=10);
// // 10 ? 10 -> false
console.log(10!==10);
// // 123 ? '123' -> false
console.log(123==='123');
// // 123 ? '123' -> true
console.log(123=='123');

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';
console.log(typeof str, typeof num, typeof flag, typeof txt);
// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
let a1 = (15 + 2) * 2;
console.log(a1);
let a2 = 36 / 6 * 2 * 1;
console.log(a2);
let a3 = (3 + 3) * (12 - 1);
console.log(a3);
let a4 = 11700 / (5 * 26);
console.log(a4);
let a5 = 180 / 2 - (1.5 + 1.5);
console.log(a5);
//
// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
let a6 = 2;
let a7 = 3;
let a8 = '53';
let a9 = 2;
let a10 = '75кг';

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
let height = 23;
console.log(height)
let width = 10;
console.log(width)
let s = height * width;
console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
let heightC = 10;
let dC = 4;
let R = dC/2
let v = 3.14 * R**2 * heightC;
console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let c = Math.sqrt(3**2 + 4**2);
console.log(c);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
let str = 'Hello world';
document.write(str);
alert(str);
console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
alert('Попов Олександр Валерійович\n23\nВолейбол');

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
let str1 = 'Кто' ;
let str2 = 'ты' ;
let str3 = 'такой?';
let concatenation = str1 + ' ' + str2 + ' ' + str3;
document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); /*- виведе 205, схоже що дія додавання не проводить тут математичну операцію а просто ставить поруч різні типи данних, я правий?
// document.write(str - a + "<br/>"); /*виведе 15, бо якщо число написане як текст, програма здатна використати його для математичних операцій */
// document.write(str * "2" + "<br/>"); виведе 40, бо якщо число написане як текст, програма здатна використати його для математичних операцій
// document.write(str / 2 + "<br/>"); виведе 10, бо якщо число написане як текст, програма здатна використати його для математичних операцій


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// parseInt("3.14") - виведе 3, бо ця команда може видати тільки ціле число
// parseInt("-7.875") виведе -7, бо ця команда може видати тільки ціле число, і вона не заокруглює в сторону найближчого цілого числа
// parseInt("435") - виведе 435, бо це ціле число
// parseInt("Вася") - виведе NaN, бо ця команда перетворює в числовий тип данних тільки написані числа

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
let str = prompt("Ти кльовий мужик?", "Так");
console.log(str);


// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let number1 = prompt("Порахуємо?\nНапиши перше число", "3");
let number2 = prompt("Напиши друге число", "5");
let result = parseFloat(number1) + parseFloat(number2);
alert(result);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let name = prompt("Введіть своє ім'я");
let surname = prompt("Введіть своє прізвище")
let age = prompt("Вкажіть свій вік")
alert('Доброго вечора ' + name + ' ' + surname + ', мої вітання що вам ' + age + ';)');



// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
let namenumber1 = prompt("Напиши якесь число");
let namenumber2 = prompt("Напиши якесь число");
let namenumber3 = prompt("Напиши якесь число");
let a = parseFloat(namenumber1);
let b = parseFloat(namenumber2);
let c = parseFloat(namenumber3);
if (a<=b && b<=c) {
    console.log(a, b, c);
} else if (a<=c && c<=b) {
  console.log(a, c, b);
} else if (b<=a && a<=c) {
    console.log(b, a, c);
} else if (b<=c && c<=a) {
    console.log(b, c, a);
} else if (c<=a && a<=b) {
    console.log(c, a, b);
} else if (c<=b && b<=a) {
    console.log(c, b, a);
}
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
let color = prompt('Цвет светофора');
switch (color) {
    case 'зеленый':
        alert("иди");
        break;
    case 'желтый':
        alert("подожди");
        break;
    case 'красный':
        alert("стой");
        break;
    default:
        alert("делай что хочешь");
}

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
let isRoadClear = prompt('Есть ли машина?')
if (color === 'зеленый' && isRoadClear === 'машин нет') {
    alert("иди");
} else if (color === 'зеленый' && isRoadClear === 'машины есть') {
    alert("подожди пока нарушители проедут");
} else if (color === 'желтый' && isRoadClear === 'машины есть') {
    alert("жди");
} else if (color === 'желтый' && isRoadClear === 'машин нет') {
    alert("все рано жди");
} else if (color === 'красный' && isRoadClear === 'машин нет') {
    alert("стой все рано");
} else if (color === 'красный' && isRoadClear === 'машины есть') {
    alert("стой и жди");
} else {
    alert("делай что хочешь");
}