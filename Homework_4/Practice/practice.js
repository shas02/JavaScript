// 1) створити функцію яка приймає масив та виводить його
function f(arr) {
    console.log(arr);
}

f([1, 2, 3, 4, 5, 6, 7]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
let arr = [];

function randomNumbers() {
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
    }
    f(arr)
}

randomNumbers();

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumber = (a, b, c) => {
    let arrNumbers = [a, b, c];
    let min = null;
    for (const arrNumber of arrNumbers) {
        if (a < b && a < c) {
            min = a;
        }
        if (b < a && b < c) {
            min = b;
        }
        if (c < a && c < b) {
            min = c
        }
    }
    console.log(min);
}

minNumber(1, 2, 3);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber = (a, b, c) => {
    let arrNumbers = [a, b, c];
    let max = null;
    for (const arrNumber of arrNumbers) {
        if (a > b && a > c) {
            max = a;
        }
        if (b > a && b > c) {
            max = b;
        }
        if (c > a && c > b) {
            max = c
        }
    }
    console.log(max);
}

maxNumber(1, 2, 3);

// 5) створити функцію яка повертає найбільше число з масиву

let maxNumber = (arr) => {
    let max = 0;
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement;
        }
    }
    console.log(max);
    return max;
}

maxNumber([1, 2, 4, 55, 99, 101]);


// 6) створити функцію яка повертає найменьше число з масиву
let minNumber = (arr) => {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        }
    }
    console.log(min);
    return min;
}

minNumber([1, 2, 4, 55, 99, 101]);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
let addNumbers = function (arr) {
    let number = 0;
    for (const arrElement of arr) {
        number += arrElement;
    }
    console.log(number);
    return number;
}

addNumbers([1, 2, 3, 4, 5, 6, 7, 8, 111]);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let middle = (arr) => {
    let number = 0;
    for (const arrElement of arr) {
        number += arrElement;
    }

    let middleNumber = number / arr.length;
    console.log(middleNumber);
    return middleNumber;
}

middle([1, 2, 3, 4, 5, 6, 7]);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let keys = function (arr) {
   let keysArr = [];
    for (const arrElement of arr) {
      for (const prop in arrElement) {
          keysArr.push(prop);
      }
    }
    console.log(keysArr);
    return keysArr;
}

keys([{name: 'Dima', age: 13}, {model: 'Camry'}])

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let velues = function (arr) {
    let velueArr = [];
    for (const arrElement of arr) {
        for (const prop in arrElement) {
            velueArr.push(arrElement[prop]);
        }
    }
    console.log(velueArr);
    return velueArr;
}

velues([{name: 'Dima', age: 13}, {model: 'Camry'}])

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function result(arr1, arr2) {
    let resultArr = [];

    for (let i = 0; i < arr1.length; i++) {
        resultArr[i] = arr1[i] + arr2[i];
    }

    console.log(resultArr);
    return resultArr;
}

result([1,2,3,4], [2,3,4,5]);


// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let maxMinNumbers = function () {
    let minNumber = arguments[0];
    let maxNumber = arguments[0];

    for (const element of arguments) {
        if (element < minNumber) {
            minNumber = element;
        }
        if (element > maxNumber) {
            maxNumber = element;
        }
    }

    console.log(minNumber);
    console.log(maxNumber);
    return minNumber;

}

maxMinNumbers(1, 3, 4, 7, 11, 239, 453, -11);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
let keysOrVelues = function (arr, whatDoYouWant = 'keys') {
    if (whatDoYouWant === 'keys') {
        let keysArr = [];
        for (const arrElement of arr) {
            for (const prop in arrElement) {
                keysArr.push(prop);
            }
        }
        console.log(keysArr);
        return keysArr;
    }

    if (whatDoYouWant === 'velues') {
        let velueArr = [];
        for (const arrElement of arr) {
            for (const prop in arrElement) {
                velueArr.push(arrElement[prop]);
            }
        }
        console.log(velueArr);
        return velueArr;
    }
}

keysOrVelues([{name: 'Dima', age: 13}, {model: 'Camry'}], 'velues');

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let changePlace = function (arr, item) {
    console.log(arr);

    let a = arr[item];
    let b = arr[item + 1];

    arr[item] = b;
    arr[item + 1] = a;

    console.log(arr);
    return arr;
}

changePlace([9, 8, 0, 4], 0);
changePlace([9, 8, 0, 4], 1);
changePlace([9, 8, 0, 4], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let zeroChanger = function (arr = []) {
    console.log(arr);

    if (arr.length >= 2 && arr.length <= 100) {
        let nonZeroArr = [];
        let zeroArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                zeroArr.push(arr[i]);

            } else {
                nonZeroArr.push(arr[i]);
            }
        }

        let newArr = nonZeroArr;

        for (const zero of zeroArr) {
            newArr.push(zero);
        }

        console.log(newArr);
        return newArr;

    } else {
        console.log("Масив має мати довжину від 2 до 100 цифр")
    }
}

zeroChanger([1, 0, 6, 0, 3]);
zeroChanger([0, 1, 2, 3, 4]);
zeroChanger([0, 0, 1, 0]);
zeroChanger([0]);


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let normalizator = function (name = '') {
    console.log(name);

    trimedName = name.trim();
    // console.log(trimedName);

    let wordsOfName = trimedName.split(' ');
    // console.log(wordsOfName);

    for (let i = 0; i < wordsOfName.length; i++) {
        if (wordsOfName[i] === '') {
            wordsOfName.splice(i, 1);
            i--
        }
    }

    // console.log(wordsOfName);

    let normalizedName = wordsOfName.join(' ');
    console.log(normalizedName);
    return normalizedName;
}

normalizator('    Harry       Potter      ');
normalizator('    Ron       Whisley      ');
normalizator('    Hermione       Granger      ');


// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function helloOwu() {
    document.write("Hello owu");
}

helloOwu();

(() => {
    document.write("Hello owu");
})()
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
let addElement = function (type = 'div', text = 'Hello world') {
    let newEllement = document.createElement(`${type}`);
    newEllement.innerText = `${text}`;
    document.body.appendChild(newEllement);
}

addElement();
addElement('p', 'Ehehey');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let auto = ['mazda', 'honda', 'BMW', 'Mersedes'];

let autoAdder = function (arrAuto = [], id) {
    let element = document.getElementById(`${id}`);
    let text = arrAuto.join(', ');
    element.innerText = text;
}

autoAdder(auto, 'auto')

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

let autoAdder = function (arrAuto = [], id) {
    let element = document.getElementById(`${id}`);

    for (const auto of arrAuto) {
        let autoDiv = document.createElement('div');
        for (const prop in auto) {
            let peshka = document.createElement('p');
            peshka.innerHTML = `
             <p>${prop}: ${auto[prop]}</p>
             `
            autoDiv.appendChild(peshka);
        }
        autoDiv.style.borderBottom = '3px solid black';
        element.appendChild(autoDiv);
    }
    document.body.appendChild(element);


}

autoAdder(autos, 'auto')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

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

let autoAdder = function (arrAuto = [], id) {
    let element = document.getElementById(`${id}`);

    for (const auto of arrAuto) {
        let autoDiv = document.createElement('div');
        for (const prop in auto) {
            let peshka = document.createElement('p');
            peshka.innerHTML = `
             <p>${prop}: ${auto[prop]}</p>
             `
            autoDiv.appendChild(peshka);
        }
        autoDiv.style.borderBottom = '3px solid black';
        element.appendChild(autoDiv);
    }
    document.body.appendChild(element);


}

autoAdder(autos, 'auto')
// // ******************* НАЗАД В МИНУЛЕ *********************** //