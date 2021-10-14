// 1) Створити масив з 20 чисел та:
let numbers = [];

function randomNumbers(arr = []) {
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
}

randomNumbers(numbers);
console.log(numbers);
    // a) відсортувати його від меншого до більшого.
let sortedNumbers1 = numbers.sort((a, b) => a - b)

console.log(sortedNumbers1);
    // b) відсортувати його від більшого до меншого.
let sortedNumbers2 = numbers.sort((a, b) => b - a)

console.log(sortedNumbers1);
//     c) Відфілтрувати числа які є кратними 3.
let numbers3 = numbers.filter(((value) => value % 3 === 0));
console.log(numbers3);

// d) Відфілтрувати числа які є більшими за 10.
let numbers3 = numbers.filter(((value) => value > 10));
console.log(numbers3);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
numbers.forEach(value => {
    document.write(`${value}<br>`);
})

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
let numbers3X = numbers.map(value => value * 3);
console.log(numbers3X);

// g) Порахувати загальну суму всіх елментів у масиві (reduce)
let numbersSum = numbers.reduce((previousValue, currentValue) => {

    return previousValue + currentValue;
})

// console.log(numbersSum);
// 2) Створити масив з 20 стрічок та:
let strs = ['el pájaro carpintero', 'la mostaza', 'la crema bronceadora', 'la cinta métrica', 'la lagartija', 'el durazno', 'las papas', 'el vaso', 'el jugo', 'el edificio', 'la ventana', 'el maní', 'el tío', 'la carnederes', 'la cuchara', 'el basurero', 'el babero', 'marrón', 'los zapatos', 'el armario'];
console.log(strs);

// a) Відсортувати його в алфавітному порядку
strs.sort();
console.log(strs);

// b) Відсортувати в зворотньому порядку
strs.sort((a, b) => {
    if (a < b) {
        return 1
    }
    return -1
});
console.log(strs);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let lenghts4Strs = strs.filter(value => value.length > 4);
console.log(lenghts4Strs);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
let SamSays = strs.map(value => `Sam says ${value}`);
console.log(SamSays);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

console.log(users);

// a) відсортувати його за  віком (зростання , а потім окремо спадання)
users.sort((a, b) => a.age - b.age);
console.log(users);

users.sort((a, b) => b.age - a.age);
console.log(users);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sortedNamesUsers = users.sort((a, b) => a.name.length - b.name.length);
console.log(sortedNamesUsers);

users.sort((a, b) => b.name.length - a.name.length);
console.log(users);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
let jsonUsers = JSON.stringify(users);
console.log(jsonUsers);

let usersForWork = JSON.parse(jsonUsers);
console.log(usersForWork);

let usersWithId = usersForWork.map((value, index) => {
    value.id = index + 1;
    return value;
});
console.log(usersWithId);
// d) відсортувати його за індентифікатором
usersWithId.sort((a, b) => a.id - b.id);
console.log(usersWithId);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let marriedUsers = usersWithId.reduce((acc, value) => {
    if (value.isMarried === true) {
        value.hasFlat = true
        acc.push(value)
    }
    return acc;
}, []);

console.log(marriedUsers);
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

// Відфільтрувати масив за наступними крітеріями :
    - двигун більше 3х літрів
let volumeMoreThan3 = cars.filter(value => value.volume > 3 );
console.log(volumeMoreThan3);

// - двигун = 2л
let volume2 = cars.filter(value => value.volume === 3);
console.log(volume2);

- виробник мерс
let producerMers = cars.filter(value => value.producer === "mercedes");
console.log(producerMers);

// - двигун більше 3х літрів + виробник мерседес
let producerMersVolumeMoreThan3 = cars.filter(value => value.producer === "mercedes" && value.volume > 3);
console.log(producerMersVolumeMoreThan3);

// - двигун більше 3х літрів + виробник субару
let producerSubaruVolumeMoreThan3 = cars.filter(value => value.producer === "subaru" && value.volume > 3);
console.log(producerMersVolumeMoreThan3);

// - сили більше ніж 300
let powerMore300 = cars.filter(value => value.power > 300);
console.log(powerMore300);

// - сили більше ніж 300 + виробник субару
let powerMore300Subaru = cars.filter(value => value.power > 300 && value.producer === "subaru");
console.log(powerMore300Subaru)

// - мотор серіі ej
let engineEj = cars.filter(value => value.engine.includes('ej'));
console.log(engineEj);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let powerMore300SubaruEngineEj = cars.filter(value => value.engine.includes('ej') && value.power > 300 && value.producer === "subaru");
console.log(powerMore300SubaruEngineEj);

// - двигун меньше 3х літрів + виробник мерседес
let volume3Mercedes = cars.filter(value => value.volume < 3 && value.producer === "mercedes");
console.log(volume3Mercedes);

// - двигун більше 2л + сили більше 250
let volume2Power250 = cars.filter(value => value.volume > 2 && value.power > 250);
console.log(volume2Power250);

// - сили більше 250  + виробник бмв
let power250BMW = cars.filter(value => value.power > 250 && value.producer === "bmw");
console.log(power250BMW);


// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

console.log(usersWithAddress);

// -- Відсортувати їх по ID
let idSortedUsers = usersWithAddress.sort((a, b) => a.id - b.id);
console.log(idSortedUsers);

// -- Відсортувати їх по ID в зворотньому порядку
let idSortedUsers = usersWithAddress.sort((a, b) => b.id - a.id);
console.log(idSortedUsers);

// -- Відсортувати по віку
let ageSortedUsers = usersWithAddress.sort((a, b) => a.age - b.age);
console.log(ageSortedUsers);

// -- Відсортувати по віку в зворотньому порядку
let ageSortedUsers = usersWithAddress.sort((a, b) => b.age - a.age);
console.log(ageSortedUsers);

// -- Відсорутвати по імені
let nameSortedUsers = usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    }
    return -1
});
console.log(nameSortedUsers);

// -- Відсорутвати по назві вулиці
let streetSortedUsers = usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1
    }
    return -1
});
console.log(streetSortedUsers);

// -- Відсорутвати по номеру будинку
let adressNumberSortedUsers = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
console.log(adressNumberSortedUsers);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
let ageLess30 = usersWithAddress.filter(value => value.age < 30);
console.log(ageLess30);

// -- Залишити тільки одружених
let marriedUsers = usersWithAddress.filter(value => value.isMarried);
console.log(marriedUsers);

// -- Залишити тільки одружених, які молодні за 30
let marriedUsersAgeLess30 = usersWithAddress.filter(value => value.isMarried && value.age < 30);
console.log(marriedUsersAgeLess30);
-- Залишити лише тих, в кого парні номери будинків.
let flatNumbers2 = usersWithAddress.filter(value => value.address.number % 2 === 0);
console.log(flatNumbers2);

// -- Порахувати загальний вік всіх людей. (reduce)
let holeAge = usersWithAddress.reduce((previousValue, currentValue) => {
    previousValue += currentValue.age
    return previousValue
}, 0)
console.log(holeAge);
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
let marriedUsersAgeLess30 = usersWithAddress.reduce((acc, value) => {
    if (value.isMarried && value.age < 30) {
        value.child = true;
        acc.push(value);

    }

    return acc;
}, [])

console.log(marriedUsersAgeLess30);


// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Для початку вкладіть всі наші створені автомобілі в масив cars.


const cars = [
    {producer: "subaru", year: 2010, power: 400, price: 5000, driver: {name: 'petya', age: 30, experience: 2}},
    {producer: "subaru", year: 2007, power: 250, price: 6000, driver: {name: 'kolya', age: 29, experience: 4}},
    {producer: "subaru", year: 2011, power: 300, price: 7000, driver: {name: 'olya', age: 28, experience: 3}},
    {producer: "subaru", year: 1998, power: 140, price: 8000, driver: {name: 'max', age: 30, experience: 8}},
    {producer: "subaru", year: 2014, power: 200, price: 9000, driver: {name: 'anya', age: 31, experience: 6}},
    {producer: "subaru", year: 2014, power: 165, price: 10000, driver: {name: 'oleg', age: 28, experience: 10}},
    {producer: "bmw", year: 2009, power: 350, price: 999999, driver: {name: 'olya', age: 31, experience: 7}},
    {producer: "bmw", year: 2013, power: 120, price: 1111111, driver: {name: 'andrey', age: 29, experience: 5}},
    {producer: "bmw", year: 2010, power: 120, price: 77777777, driver: {name: 'masha', age: 30, experience: 1}},

];

console.log(cars);

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
let restoredCars = cars.reduce((acc, value) => {
    if (value.year < 2013) {
        value.power += 100
        acc.push(value);
    }
    return acc;
}, [])

console.log(restoredCars);
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
let newDrivers = [{name: 'anya', age: 31, experience: 3},
    {name: 'oleg', age: 28, experience: 1},
    {name: 'andrey', age: 29, experience: 3},
    {name: 'masha', age: 30, experience: 4},
    {name: 'olya', age: 31, experience: 7},
    {name: 'max', age: 31, experience: 2}]

for (let i = 0; i < restoredCars.length; i++) {
    restoredCars[i].driver = newDrivers[i];
}

console.log(restoredCars);

// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
for (let i = 0; i < cars.length; i += 2) {
    cars[i].power += cars[i].power * 0.1;
    cars[i].price += cars[i].price * 0.05;
}

console.log(cars);
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
for (let i = 0; i < cars.length; i++) {
    if (cars[i].driver.experience < 5 && cars[i].driver.age > 25) {
        cars[i].driver.experience += 1;
    }

}
console.log(cars);
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let holePrice = cars.reduce((acc, velue) => {
    acc += velue.price;
    return acc;
}, 0)
console.log(holePrice);

//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

let findIndex = function (arr, number) {
    let Answer = {MinIndex: 0, MaxIndex: 0}
    Answer.MinIndex = arr.findIndex(value => value === number)
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === number) {
            Answer.MaxIndex = i;
            break;
        }

    }
    if (Answer.MinIndex === -1) {
        console.log(-1);
        return
    }
    console.log(Answer);
}

findIndex(Arr ,7);
findIndex(Arr ,2);
findIndex(Arr ,4);
findIndex(Arr ,25);