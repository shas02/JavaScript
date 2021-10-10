// 1) Створити масив з 20 чисел та:
let numbers = [1, 0, 23, 25, 67, 333, 99, 77, 18, 1997, 6, 7, 233, 195, 432, 6, 11, 12, 47, 20];
console.log(numbers);

//     a) відсортувати його від меншого до більшого.
let sortedNumbers = numbers.sort((a, b) => {
    // console.log(a, 'a');
    // console.log(b, 'b');
    return a - b;
});
console.log(sortedNumbers);

//     b) відсортувати його від більшого до меншого.
let newSortedNumbers = numbers.sort((a, b) => b - a);
console.log(newSortedNumbers);

//     c) Відфілтрувати числа які є кратними 3.
let filteredNumbers1 = numbers.filter((value => value % 3 === 0));
console.log(filteredNumbers1);

// d) Відфілтрувати числа які є більшими за 10.
let filteredNumbers2 = numbers.filter(value => value > 10);
console.log(filteredNumbers2);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
numbers.forEach(value => {
    document.write(value);
});

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
let mapedNumbers = numbers.map(number => number * 3);
console.log(mapedNumbers);

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
let calculatedNumbers = numbers.reduce((acc, currentValue) => acc + currentValue);
console.log(calculatedNumbers);

// 2) Створити масив з 20 стрічок та:
let strs = ['la mosca', 'el pescado', 'el aeropuerto', 'la llanta', 'el armadillo', 'el maní', 'el zorro', 'amarillo', 'el algodón', 'el árbol', 'el refrigerador', 'la leche', 'el lavamanos', 'el traje de baño', 'la agujeta', 'la piña', 'el dulce', 'la gaviota', 'la ardilla', 'las palomitas de maíz'];
console.log(strs);

//     a) Відсортувати його в алфавітному порядку
let sortedStrs = strs.sort();
console.log(sortedStrs);

// b) Відсортувати в зворотньому порядку
let reverseSortedStrs = strs.sort((a, b) => {
    if (a < b) {
        return 1
    }
    {
        return -1
    }
})

console.log(reverseSortedStrs);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let filteredStrs = strs.filter(name => name.length > 4);
console.log(filteredStrs);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
let changenStrs = strs.map(value => `Sam says ${value}`);
console.log(changenStrs);

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
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
let sortedUsers = users.sort((a, b) => {
    return a.age - b.age;
})
console.log(sortedUsers);

let sortedReverseUsers = users.sort((a, b) => b.age - a.age);
console.log(sortedReverseUsers);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sortedNames1 = users.sort((a, b) => {
    if (a.name.length < b.name.length) {
        return -1
    }
    return 1
});
console.log(sortedNames1);

let sortedNames2 = users.sort((a, b) => {
    if (a.name.length < b.name.length) {
        return 1
    }
    return -1
});
console.log(sortedNames2);

// *********************************************************************************************
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

let idUser = users.reduce((acc, value, index) => {
    value.id = index;
    acc.push(value);
    return acc
}, [])

console.log(users);
console.log(users);


let idUser = users.map((value, index) => {
    value.id = index;
    return value
});

console.log(JSON.stringify(users));
console.log(idUser);
// *******************************************************************************************************
// d) відсортувати його за індентифікатором
let sortedIdUser = idUser.sort((a, b) => b.id - a.id);
console.log(sortedIdUser);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let usersWithFlats = idUser.reduce((acc, value) => {
    if (value.isMarried === true) {
        value.flat = true;
        acc.push(value);
    }
    return acc;
}, []);

console.log(usersWithFlats);
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
let bigEngine = cars.filter(value => value.volume > 3);
console.log(bigEngine);

// - двигун = 2л
let smallEngine = cars.filter(value => value.volume === 2);
console.log(smallEngine);

// - виробник мерс
let mercedes = cars.filter(value => value.producer === "mercedes");
console.log(mercedes);

// - двигун більше 3х літрів + виробник мерседес
let mercedesBenz = cars.filter(value => value.producer === "mercedes" && value.volume > 3);
console.log(mercedesBenz);

// - двигун більше 3х літрів + виробник субару
let bigSubaru = cars.filter(value => value.producer === "subaru" && value.volume > 3);
console.log(bigSubaru);

// - сили більше ніж 300
let bigPower = cars.filter(value => value.power > 300);
console.log(bigPower);

// - сили більше ніж 300 + виробник субару
let powerSubaru = cars.filter(value => value.producer === "subaru" && value.power > 300);
console.log(powerSubaru);

// - мотор серіі ej
let ejMotor = cars.filter(value => value.engine.startsWith('ej'));
console.log(ejMotor);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let vauCar = cars.filter(value => value.producer === "subaru" && value.engine.startsWith('ej') && value.power > 300);
console.log(vauCar);

// - двигун меньше 3х літрів + виробник мерседес
let mediumMercedes = cars.filter(value => value.producer === "mercedes" && value.volume < 3);
console.log(mediumMercedes);

// - двигун більше 2л + сили більше 250
let mediumEngine = cars.filter(value => value.volume > 2 && value.power > 250);
console.log(mediumEngine);

// - сили більше 250  + виробник бмв
let BMV = cars.filter(value => value.producer === "bmw" && value.power > 250);
console.log(BMV);

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

// -- Відсортувати їх по ID
let sortedId = usersWithAddress.sort((a, b) => a.id - b.id);
console.log(sortedId);

// -- Відсортувати їх по ID в зворотньому порядку
let sortedId2 = usersWithAddress.sort((a, b) => b.id - a.id);
console.log(sortedId2);

// -- Відсортувати по віку
let sortedAge = usersWithAddress.sort((a, b) => a.age - b.age);
console.log(sortedAge);

// -- Відсортувати по віку в зворотньому порядку
let sortedAge2 = usersWithAddress.sort((a, b) => b.age - a.age);
console.log(sortedAge2);

// -- Відсорутвати по імені
let sortedName = usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    return -1;
});
console.log(sortedName);

// -- Відсорутвати по назві вулиці
let sortedStreet = usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1;
    }
    return -1;
});
console.log(sortedStreet);

// -- Відсорутвати по номеру будинку
let sortedNumbers = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
console.log(sortedNumbers);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
let filteredAge = usersWithAddress.filter(value => value.age < 30);
console.log(filteredAge);

// -- Залишити тільки одружених
let filterdMarried = usersWithAddress.filter(value => value.isMarried === true);
console.log(filterdMarried);

// -- Залишити тільки одружених, які молодні за 30
let filteredAgeAndMarried = usersWithAddress.filter(value => value.age < 30 && value.isMarried === true);
console.log(filteredAgeAndMarried);

// -- Залишити лише тих, в кого парні номери будинків.
let sortedNumbers = usersWithAddress.filter(value => value.address.number % 2 === 0);
console.log(sortedNumbers);

// -- Порахувати загальний вік всіх людей. (reduce)
let age = usersWithAddress.reduce((acc, currentValue) => {
    return acc + currentValue.age

}, 0);
console.log(age);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
let ageMarried = usersWithAddress.reduce((acc, currentValue) => {
    if (currentValue.age > 30 && currentValue.isMarried === true) {
        currentValue.child = {name: '', age: '', gender: ''};
        acc.push(currentValue);
    }
    return acc;
}, []);
console.log(ageMarried);
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.

class driver {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
}

class car {
    constructor(car_brand, engine_power, owner, price, year_of_manufacture) {
        this.car_brand = car_brand;
        this.engine_power = engine_power;
        this.owner = owner;
        this.price = price;
        this.year_of_manufacture = year_of_manufacture;
    }

    repair() {
        this.engine_power = this.engine_power + (this.engine_power * 0.1);
    }

    new_owner(name, age, experience) {
        this.owner = {name, age, experience};
    }

    courses() {
        this.owner.experience = this.owner.experience + 1;
    }
}

let Vasya = new driver('Vasya', 23, 3);
let subaru_wrx = new car('subaru', 400, Vasya, 10000, 2010);
console.log(subaru_wrx)

let Anna = new driver('Anna', 31, 5);
let subaru_legacy = new car('subaru', 250, Anna, 7000, 2007);
console.log(subaru_legacy);

let Petro = new driver('Petro', 25, 7);
let bmw_115 = new car('bmw', 120, Petro, 8000, 2013);
console.log(bmw_115);

let Dmitry = new driver('Dmitry', 19, 1);
let bmw_650 = new car('bmw', 350, Dmitry, 20000, 350);
console.log(bmw_650);

let Olga = new driver('Olga', 26, 3);
let mercedes_e63 = new car('mercedes', 400, Olga, 25000, 2017);
console.log(mercedes_e63);

let Arthur = new driver('Arthur', 24, 2);
let mercedes_c250 = new car('mercedes', 230, Arthur, 18000, 2017);
console.log(mercedes_c250);

let David = new driver('David', 18, 10);
let subaru_tribeca = new car('subaru', 300, David, 23000, 2011);
console.log(subaru_tribeca);

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
subaru_wrx.repair();
console.log(subaru_wrx)

subaru_legacy.repair();
console.log(subaru_legacy);

bmw_115.repair();
console.log(bmw_115);

bmw_650.repair();
console.log(bmw_650);


// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
subaru_wrx.new_owner('Chip', 19, 2);
console.log(subaru_wrx)

subaru_legacy.new_owner('Dale', 19, 1);
console.log(subaru_legacy);

bmw_115.new_owner('Monty', 35, 15);
console.log(bmw_115);

bmw_650.new_owner('Gadget', 21, 4);
console.log(bmw_650);

// Для початку вкладіть всі наші створені автомобілі в масив cars.
let cars = [subaru_wrx, subaru_legacy, bmw_115, bmw_650, mercedes_e63, mercedes_c250, subaru_tribeca];
console.log(cars);

//     Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
for (let i = 1; i < cars.length; i += 2) {
    cars[i].repair();
    cars[i].price = cars[i].price + (cars[i].price * 0.5);
    console.log(cars);
}

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
for (let i = 0; i < cars.length; i++) {
    if (cars[i].owner.experience < 5 && cars[i].owner.age > 25) {
        cars[i].courses();
        console.log(cars[i]);
    }
}

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let wholePrice = cars.reduce((acc, currentValue) => acc + currentValue.price, 0);
console.log(wholePrice);

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

let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]

function Key(number) {
    let Answer = {MinIndex: 0, MaxIndex: 0}
    Answer.MinIndex = Arr.findIndex(value => value === number);
    for (let i = Arr.length; i >= 0; i--) {
        if (Arr[i] === number) {
            Answer.MaxIndex = i;
            break;
        }
    }
    if (Answer.MinIndex === -1) {
        console.log(-1)
    } else {
        console.log(Answer);

    }
}

Key(7);
Key(2)
Key(4)
Key(25)




