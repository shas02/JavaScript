// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let a = [1,2,3,4,5];
console.log(a);
let b = ['exclusive', 'fang', 'regular', 'selection', 'scrub'];
console.log(b);
let c = ['la cuna mecedora', 'el aeropuerto', 'la guitarra', 'la comida', 'el pollo', 23, 16, 18, 43, 27, true, true, false, true, true];
console.log(c);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let d = [];
d[0] = 'dsfgsdf';
d[1] = 1212;
d[2] = 3434;
d[3] = 'qwerty';
d[4] = true;
console.log(d);

// Тренувався додавати і прибирати елементи
d.push(1);
console.log(d);
d.unshift(2)
console.log(d);
d.unshift('interest');
console.log(d);
d.push('blink');
console.log(d);
d.pop();
console.log(d);
d.shift();
console.log(d);
d.push(123123);
d.push(1345435);
d.push('dsfgsdfgqw');
console.log(d);
let sliceArea = d.slice(1,4);
console.log(sliceArea);

let spliceArea = d.splice(0, 2, 'a', 'b');
console.log(d);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let words = ['la mamá', 'críquet', 'la caja de herramientas', 'los zapatos', 'la nevera', 'el aeropuerto', 'la toalla', 'el armario', 'el baño', 'el salero'];
for (let word of words) {
    document.write(`<div>${word}</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < words.length; i = i + 1 ) {
    document.write(`<div>${words[i]}, ${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i<20) {
document.write('<h1>dashfadskjf</h1>')
    i++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while (i<20) {
    document.write(`<h1>dashfadskjf, ${i}</h1>`)
    i++
}

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str = ['el kéchup', 'el helado', 'la lavadora', 'el cinturón', 'el gato', 'el tío', 'jockey', 'el traje de baño', 'el equipaje'];
for (let i = 0; i <str.length; i += 1) {
    console.log(str[i])
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let everything = [11233, true, true, 908212, 'sdfsd', 'qweqewr', 'poojkj', true, 1233321, 90];
let i = 0;
while (i < everything.length) {
    console.log(everything[i])
    i++
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let everything = [11233, true, false, 908212, 'sdfsd', 'qweqewr', 'poojkj', true, 1233321, 90];
for (let i of everything) {
    if (typeof(i) === "number" || typeof(i) === "string") {
        continue;
    }
    console.log(i)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let everything = [11233, true, false, 908212, 'sdfsd', 'qweqewr', 'poojkj', true, 1233321, 90];
for (let i = 0; i<everything.length; i = i+1) {
    if (typeof(everything[i]) === "boolean" || typeof(everything[i]) === "string") {
        continue;
    }

    console.log(everything[i])
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let everything = [11233, true, false, 908212, 'sdfsd', 'qweqewr', 'poojkj', true, 1233321, 90];
let i = 0;
while (i<everything.length) {
    if (typeof everything[i] === "boolean" || typeof everything[i] === "number") {
        i++
    } else {
        console.log(everything[i])
        i++
    }
}

// Оптимізував код
let i = 0;
while (i < everything.length) {
    if (typeof everything[i] === "string") {

        console.log(everything[i])
    }
    i++
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let mass = [];
mass[0] = true;
mass[1] = 'sddfsdf'
mass[2] = 'qwerqwer'
mass[3] = true
mass[4] = 122134
mass[5] = 678689
mass[6] = 8909887
mass[7] = 0.3
mass[8] = '123213'
mass[9] = 'xcvxcv'

for (let item of mass) {
    console.log(item);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i += 1) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i<100; i++) {
    console.log(i);
    document.write(`<h4>${i}</h4>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i += 1) {
    if (i % 2 == 0) {
    console.log(i);
    document.write(`<div>${i}</div>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 2; i < 100; i++) {
    if (i % 2 ===0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let m = 0; m <= 2; m++) {

    document.write('<br/>');
    document.write(m);
    document.write('<br/>');
    for (let s = 1; s <= 60; s++) {
        if (m < 2) {
            document.write(s)
        }
    }
}

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let h = 0; h <= 2; h++) {
    document.write(`<h1>${h}</h1>`);
    for (let m = 0; m <= 60; m++) {
        if (h === 2 && m === 20) {
            break;
        } else {
            document.write('<br/>');
            document.write(m);
            document.write('<br/>');
            for (let s = 1; s <= 60; s++) {
                if (m < 60) {
                    document.write(s);
                }
            }
        }
    }
}

//
//
//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr = ['a', 'b', 'c'];
for (i = 1; i <= 3; i++) {
    arr.push(i);
}
console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let arr = [1, 2, 3];
console.log(arr);

arr = [];
console.log(arr);

for (i = 3; i >= 1; i--) {
    arr.push(i);
}
console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let num = [1, 2, 3];
for (i = 4; i <= 6; i++) {
    num.push(i);
}
console.log(num);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let num = [1, 2, 3];
for (i = 4; i <= 6; i += 1) {
    num.unshift(i);
}
console.log(num);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let words = ['js', 'css', 'jq'];
let x = words.shift();
console.log(x);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let x = words.pop();
console.log(x);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let nums = [1, 2, 3, 4, 5];
for (i = 0; i < 3; i++) {
    nums.shift()
}
console.log(nums);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
for (i=0; i < 3; i++) {
    nums.pop();
}
console.log(nums);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
let x = nums.splice(3, 2, 'a', 'b', 'c');
console.log(x);
console.log(nums);
nums.push(x);
console.log(nums);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
console.log(nums);

let x = nums.splice (1, 3, 'a', 'b');
console.log(x);
console.log(nums);

let y = nums.splice(3, 1, x);
console.log(y);
console.log(nums);

nums.push('c', y, 'e');
console.log(nums);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbers = [12, 3, 4, 15, 16, 8, 653, 654, 999, 333];
for (item of numbers) {
    if (item % 2 === 0) {
        console.log(item);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let zero = [];
for (item of numbers) {
    zero.push(item);
}
console.log(zero);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let zero = [];
for (i = 0; i < numbers.length; i++) {
    zero.push(numbers[i]);
}
console.log(zero);

// Спробував інший варіант
let i = 0
while (i < numbers.length) {
    zero.push(numbers[i]);
    i++
}
console.log(zero);

// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
let i = 0
while (i < arr.length) {
    console.log(arr[i]);
    i++
}

//     2. перебрати його циклом for
for (i of arr) {
    console.log(i);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 0;
while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
    i++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (item of arr) {
    if (item % 2 !== 0) {
        console.log(item);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (item of arr) {
    if (item % 2 === 0) {
        console.log(item);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr.splice(i, 1, "okten");
    }
}
console.log(arr);

// 8. вивести масив в зворотньому порядку.
console.log(arr);
for (i = 9; i >= 0; i--) {
    console.log(arr[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
 let i = 9
while (i >= 0) {
    console.log(arr[i]);
    i--
}

for (i=9; i >= 0; i--) {
    console.log(arr[i]);
}

let i = 9
while (i >= 0) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
    i--
}

for (i = 9; i >= 0; i--) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}

let i = 9;
while (i >= 0) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i--
}

for (i = 9; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}

for (i = 9; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        arr.splice(i, 1, "okten");
    }
    console.log(arr[i]);
}
10
створити пустий масив та :
let arr = [];

//     - заповнити його 50 парними числами за допомоги циклу.
for (i = 2; i <= 100; i = i + 2) {
    arr.push(i);
}
console.log(arr);

// - заповнити його 50 непарними числами за допомоги циклу.
for (i = 1; i <= 99; i += 2) {
    arr.push(i);
}
console.log(arr);


// 1. Створити пустий масив та :
let arr = [];

//     a. заповнити його 50 парними числами за допомоги циклу.
for (i = 2; i <= 100; i += 2) {
    arr.push(i);
}
console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.
let i = 1;
while (i <= 99) {
    arr.push(i);
    i += 2
}
console.log(arr);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS )
for (i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 11));
}
console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * (732 - 8 + 1)) +8 );
}
console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен
for (i = 2; i < arr.length; i += 3) {
    console.log(arr[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let numbers = [];
for (i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
        numbers.push(arr[i]);
    }
}
console.log(numbers);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (i = 0; i < arr.length; i++) {
    if (arr[i+1] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let x = [100,250,50,168,120,345,188];
let sum = 0;
for (i = 0; i < x.length; i++) {
    sum += x[i];
}
console.log(sum);
let average = sum / x.length;
console.log(average);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr = [];
let x = [];
for (i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 11) * 5);
    x.push(arr[i])
}
console.log(arr);
console.log(x);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let mass = [1, true, 34, 'las plantas', 'el algodón', 'la comida', 23, 70, 81, 94, 111];
console.log(mass);
let x = [];
for (i = 0; i < mass.length; i++) {
    if (typeof mass[i] === "number") {
        x.push(mass[i]);
    }

}
console.log(x);
//
//
//
//
//     ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let letters =  [ 'a', 'b', 'c'];
let word = 0;

for (i = 0; i < letters.length; i++) {
    word += letters[i];
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
while (i < letters.length) {
    word += letters[i];
    i++
}
console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

for (i of letters) {
    word += i;
}
console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (i of letters) {
    word += i;
}
console.log(word);